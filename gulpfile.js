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
var awspublish = require('gulp-awspublish');
var parallelize = require("concurrent-transform");

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
      gutil.log("build-json-ja complete.");
      gutil.log(result.stderr);
      gutil.log("Cleaning compiled .mo files.");

      gulp.src("src/locale/*/LC_MESSAGES/*.mo", { read: false })
        .pipe(clean())
        .on('finish', function() {
          gutil.log("Done!");
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
      gutil.log("Removing POT Creation Date")
      gulp.src('src/locale/*.pot')
        // Remove POT-Creation-Date from pot files.
        .pipe(replace(/"POT-Creation-Date.+"\n/, ''))
        .pipe(gulp.dest('src/locale/'))
        .on('end', function() {
          gutil.log("Done!")
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
  return gulp.src("src/web/page/**/*").pipe(gulp.dest('build/web'));
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
gulp.task('deploy', function() {
  var publisher = awspublish.create({
    params: {
      Bucket: process.env.S3_BUCKET
    },
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET
  });
 
  // define custom headers 
  var headers = {
    'Cache-Control': 'max-age=7200, no-transform, public'
  };

  return gulp.src('build/web/**/*')
    .pipe(parallelize(publisher.publish(headers), 10))
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});
