var metalsmith = require('metalsmith');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var fjson2meta = require('./fjson2meta')
var layouts = require('metalsmith-layouts');
var copy = require('./metalsmith-copy');
var static = require('metalsmith-static');
var Handlebars = require('handlebars');
var nodeFs = require('fs');
var nodePath = require('path');
var ncp = require('ncp');

module.exports = function(options) {
  var lang = options.lang;
  var self = this;

  // Register Handlebars helpers
  require('handlebars-helpers/lib/helpers/helpers-collections').register(Handlebars);
  require('handlebars-helpers/lib/helpers/helpers-comparisons').register(Handlebars);
  require('handlebars-helpers/lib/helpers/helpers-dates').register(Handlebars);

  function tree(files, metalsmith, done) {
    metalsmith.metadata().globaltoc = JSON.parse(nodeFs.readFileSync('build/json/' + lang + '/globaltoc.fjson')).body.replace(/href="..\//g, 'href="/' + lang + '/');

    for (file in files) {
      var rootpath = file.split("/")[0];
      var path = nodePath.join(metalsmith.source(), rootpath, "/toctree.fjson");
      if (nodeFs.existsSync(path)) {
        files[file]["toctree"] = JSON.parse(nodeFs.readFileSync(path)).body.replace(/href="..\//g, 'href="/' + lang + '/' + rootpath + "/");
      }
    }
    done();
  }

  function checkMultipleVersions(files, metalsmith, done) {
    var versions = {
      "cordova_3.5": "3.5",
      "cordova_4.1": "4.1",
      "cordova_5.2": "5.2",
    };
    for (file in files) {
      var path = nodePath.join(metalsmith.source(), file);
      if (file.indexOf("/reference/cordova_") != -1) {
        var currentVersion = null;

        files[file].cordovaVersions = {};
        for (v in versions) {
          if (file.indexOf(v) != -1) {
            currentVersion = v;
          }
        }
        for (v in versions) {
          files[file].cordovaVersions[v] = {
            versionPath: v,
            versionName: versions[v],
          }
          if (v == currentVersion) {
            files[file].cordovaVersions[v].selected = true;
            files[file].cordovaVersion = files[file].cordovaVersions[v];
          }
        }
      }
    }
    done();
  }

  function generate(done) {
    metalsmith(__dirname + '/../../')
      .source('build/json/' + lang)
      .destination('build/web/' + lang)
      .use(function(files, metalsmith, done) {
        metalsmith.metadata().lang = lang;
        done();
      })
      .use(function(files, metalsmith, done) {
        tree(files, metalsmith, done);
      })
      .use(function(files, metalsmith, done) {
        checkMultipleVersions(files, metalsmith, done);
      })
      .use(fjson2meta({}))
      .use(layouts({
        engine: "handlebars",
        default: "layout.html",
        directory: "src/web/layout",
        partials: "src/web/partial",
      }))
      .use(copy({
        pattern: '**/!(index).fjson',
        transform: function(file) {
          if (file.indexOf('index.fjson') === -1) {
            var oldfile = file;
            file = file.replace('.fjson', '/index.fjson');
          }
          return file;
        },
        move: true
      }))
      .use(copy({
        pattern: '**/*.fjson',
        extension: '.html',
        move: true
      }))
      .use(copy({
        pattern: '**/*.fjson',
        extension: '.html',
        move: true
      }))
      .use(static({
        src: "src/web/static",
        dest: "../static/"
      }))
      .build(function(error) {
        if (error) {
          gutil.log('ERROR: ' + error);
          if (error.stack) {
            gutil.log(error.stack);
          }
        }
        browserSync.reload();
        gutil.log('Generated into build/web');
        done();
      });
  }

  return {
    build: function(done) {
      ncp("src/web/page", "build/json", {}, function (err) {
        if (err) {
           return gutil.log("Error copying page: " + err);
        }

        gutil.log("Copied pages to build/json.");

        // Run metalsmith
        generate(done);
      });
    }
  };
};
