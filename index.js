var glob = require('glob');
var DEFAULT_SLICE_KEYS = [
  'src/modules',
  'index.js'
];

function getSlicedKey(inPath, inSliceKeys) {
  var sliceKeys = inSliceKeys || DEFAULT_SLICE_KEYS;
  var start = sliceKeys[0].length + 1;
  var end = sliceKeys[1].length + 1;
  return inPath.slice(start, -end);
}

module.exports = function (inGlob, inSliceKeys, inOptions) {
  var globPaths = Array.isArray(inGlob) ? inGlob : glob.sync(inGlob, inOptions);
  var entries = {};
  globPaths.forEach(function (path) {
    entries[
      getSlicedKey(path, inSliceKeys)
    ] = path;
  });
  return entries;
};

