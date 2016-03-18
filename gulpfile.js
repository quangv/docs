var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
var metalsmith = require('./src/web/metalsmith');
var transifex = require('./src/gulp/gulp-transifex');
var prompt = require('gulp-prompt');
var clean = require('gulp-clean');
var replace = require('gulp-replace');
var config = (fs.existsSync("./config.json")) ? JSON.parse(fs.readFileSync("./config.json")) : {};
var exec = require('child-process-promise').exec;
var sass = require('gulp-sass');
var bourbon = require('node-bourbon');

bourbon.with('./src/web/static/css/common.scss');

//////////////////////////////
// generate
//////////////////////////////
gulp.task('default', ['generate']);

//////////////////////////////
// generate
//////////////////////////////
gulp.task('generate', function(done) {
  runSequence('clean', 'sphinx', 'sass', 'metalsmith', done);
});

//////////////////////////////
// sphinx
//////////////////////////////
gulp.task('sphinx', function(done) {
  runSequence('sphinx-en', 'sphinx-ja', done);
});
gulp.task('sphinx-en', function(done) {
  runSequence(['build-json-en', 'build-pot'], 'transifex-upload', done);
});
gulp.task('sphinx-ja', function(done) {
  runSequence('transifex-download', 'build-json-ja', done);
});

//////////////////////////////
// build-json
//////////////////////////////
gulp.task('build-json-en', function(done) {
  exec('sphinx-build -b json src/doc build/json/en')
    .then(function(result) {
      gutil.log(result.stderr)
      done() 
    })
    .fail(function(err) {
      gutil.log(gutil.colors.red(err));
      done();
    });
});
gulp.task('build-json-ja', function(done) {
  exec('sphinx-build -D language=ja -A lang=ja -b json src/doc build/json/ja')
    .then(function(result) {
      gutil.log("build-json-ja complete.")
      gutil.log(result.stderr)
      gulp.src("src/locale/*/LC_MESSAGES/*.mo", { read: false })
        .pipe(clean())
        .on('end', function() {
          done();
        })
    })
    .fail(function(err) {
      gutil.log(gutil.colors.red(err));
      done();
    });;
});


//////////////////////////////
// gettext
//////////////////////////////
gulp.task('build-pot', function(done) {
  exec('sphinx-build -b gettext src/doc src/locale')
    .then(function(result) {
      gutil.log(result.stderr);
      gulp.src('src/locale/*.pot')
        // Remove POT-Creation-Date from pot files.
        .pipe(replace(/"POT-Creation-Date.+"\n/, ''))
        .pipe(gulp.dest('src/locale/'))
        .on('end', function() {
          done();
        })
    })
    .fail(function(err) {
      gutil.log(gutil.colors.red(err));
      done();
    });
});

//////////////////////////////
// transifex
//////////////////////////////
var createTransifexClient = function() {
  if (!process.env.TRANSIFEX && !config.TRANSIFEX) {
    gutil.log(gutil.colors.bold.red("No TRANSIFEX variable found in env or config.json!"));
    gutil.log(gutil.colors.red("Transifex sync is not available."));
    return null;
  }
  var userpw = process.env.TRANSIFEX || config.TRANSIFEX;
  return transifex.createClient({
      user: userpw.split(":")[0],
      password: userpw.split(":")[1],
      project: "monaca-docs",
      local_path: "src/locale/",
    });
}
gulp.task('transifex-upload', function(done){
  var client = createTransifexClient();
  if (!client) return done();
  return gulp.src("src/locale/*.pot").pipe(client.pushResource());
});
gulp.task('transifex-download', function(done){
  var client = createTransifexClient();
  if (!client) return done();
  return gulp.src("src/locale/*.pot").pipe(client.pullResource());
})

//////////////////////////////
// metalsmith
//////////////////////////////
gulp.task('metalsmith', function(done) {
  runSequence(['metalsmith-en', 'metalsmith-ja'], 'metalsmith-common', done);
});
gulp.task('metalsmith-en', function(done) {
  metalsmith({ lang: "en" }).build(done);
});
gulp.task('metalsmith-ja', function(done) {
  metalsmith({ lang: "ja" }).build(done);
});
gulp.task('metalsmith-common', function(done) {
  return gulp.src("src/web/page/*").pipe(gulp.dest('build/web'));
})

//////////////////////////////
// sass
//////////////////////////////
gulp.task('sass', function(done) {
  return gulp.src('./src/web/static/css/**/*.scss')
    .pipe(sass({includePaths: bourbon.includePaths}).on('error', sass.logError))
    .pipe(gulp.dest('./src/web/static/css'))
    .pipe(gulp.dest('./build/web/static/css'));
});

//////////////////////////////
// clean
//////////////////////////////
gulp.task('clean', function(done) {
  return gulp.src("build/*", { read: false })
    .pipe(clean())
});

//////////////////////////////
// serve
//////////////////////////////
gulp.task('serve', ['metalsmith'], function() {
  browserSync({
    server: {
      baseDir: 'build/web',
      index: 'index.html'
    },
    notify: false,
    open: false,
    injectChanges: true
  });

  var options = {
    debounceDelay: 400
  };

  gulp.watch([
    'src/doc/**/*',
  ], options, function() {
    runSequence(['sphinx', 'metalsmith']);
  });

  gulp.watch([
    'src/web/**/*',
    '!src/web/static/css/**/*'
  ], options, function() {
    runSequence(['metalsmith'], function() {
      browserSync.reload();
    });
  });

  gulp.watch([
    'src/web/static/css/**/*.scss',
  ], options, function() {
    runSequence(['sass'], function() {
      browserSync.reload();
    });
  });

});

//////////////////////////////
// deploy
//////////////////////////////
gulp.task('deploy', ['clean', 'generate'], function() {
  var aws,
    fn = 'aws_' + lang + (env == 'production' ? '_prod' : '') + '.json';

  try {
    aws = JSON.parse(fs.readFileSync(path.join(__dirname, fn)));
  } catch(e) {
  }

  if (!aws) {
    throw new Error(fn + ' is missing! Please create it before trying to deploy!');
  }

  var dst = 'out_' + lang;
  var publisher = $.awspublish.create(aws);

  var site = gulp.src([
    dst + '/**',
    '!' + dst + '/OnsenUI',
    '!' + dst + '/2/OnsenUI',
    '!' + dst + '/project-templates'
  ]);

  var templates = gulp.src('project-templates/gen/**')
    .pipe($.rename(function(path) {
      path.dirname = 'project-templates/gen/' + path.dirname;
    }));

  var build = gulp.src('OnsenUI/build/**')
    .pipe($.rename(function(path) {
      path.dirname = 'OnsenUI/build/' + path.dirname;
    }));

  var build2 = gulp.src('2/OnsenUI/build/**')
    .pipe($.rename(function(path) {
      path.dirname = '2/OnsenUI/build/' + path.dirname;
    }));

  var headers = env == 'production' ? {'Cache-Control': 'max-age=7200, no-transform, public'} : {'Cache-Control': 'no-cache'};

  var stream = merge(site, templates, build, build2)
    .pipe($.awspublish.gzip())
    .pipe(publisher.publish(headers))
    .pipe(publisher.sync())
    .pipe($.awspublish.reporter());

  return stream;
});
