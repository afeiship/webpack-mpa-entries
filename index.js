var glob = require("glob");
var resolve = require("path").resolve;
var dirname = require("app-root-path").path;
var DEFAULT_SLICE_KEYS = ["src/modules", "index.js"];

function getSlicedKey(inPath, inSliceKeys, inOptions) {
  var isAbsolute = inOptions.absolute || false;
  var sliceKeys = inSliceKeys || DEFAULT_SLICE_KEYS;
  var startPath = isAbsolute ? resolve(dirname, sliceKeys[0]) : sliceKeys[0];
  var start = startPath.length + 1;
  var end = sliceKeys[1].length + 1;
  return inPath.slice(start, -end);
}

module.exports = function(inGlob, inSliceKeys, inOptions) {
  var options = inOptions || {};
  var globPaths = Array.isArray(inGlob) ? inGlob : glob.sync(inGlob, options);
  var entries = {};
  globPaths.forEach(function(path) {
    entries[getSlicedKey(path, inSliceKeys, options)] = path;
  });
  return entries;
};
