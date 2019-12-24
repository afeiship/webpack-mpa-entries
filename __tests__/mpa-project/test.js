var mpaEntries = require('../../index');
var glob = require('glob');;
var paths = "./src/modules/**/index.js";
var entries = mpaEntries(paths);


console.log(entries);

/**
 mpaEntries(paths)

 { 'blank-module': 'src/modules/blank-module/index.js',
  'my-module/buyer': 'src/modules/my-module/buyer/index.js',
  'my-module': 'src/modules/my-module/index.js',
  'my-module/seller': 'src/modules/my-module/seller/index.js',
  'test-module': 'src/modules/test-module/index.js' }
*/

