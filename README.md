# webpack-mpa-entries
> Multiple page entries app for webpack.


## installation
```shell
npm i -D @feizheng/webpack-mpa-entries
```

## usage

```js
var mpaEntries = require('../../index');
var glob = require('glob');;
var entries = mpaEntries("src/modules/**/index.js");

// result:
 { 'blank-module': 'src/modules/blank-module/index.js',
  'my-module/buyer': 'src/modules/my-module/buyer/index.js',
  'my-module': 'src/modules/my-module/index.js',
  'my-module/seller': 'src/modules/my-module/seller/index.js',
  'test-module': 'src/modules/test-module/index.js' }

```
