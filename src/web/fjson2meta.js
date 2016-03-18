var basename = require('path').basename;
var dirname = require('path').dirname;
var extname = require('path').extname;

/**
 * Expose `plugin`.
 */
module.exports = plugin;

function plugin(options) {
  options = options || {};
  var keys = options.keys || [];

  return function(files, metalsmith, done) {
    setImmediate(done);
    Object.keys(files).forEach(function(file) {
      if (!fjson(file)) return;

      var jsonMeta = JSON.parse(files[file].contents.toString());
      files[file].fjson = jsonMeta;
    });
  };
};

/**
 * Check if a `file` is markdown.
 *
 * @param {String} file
 * @return {Boolean}
 */

function fjson(file) {
  return /\.fjson/.test(extname(file));
}
