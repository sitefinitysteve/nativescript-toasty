# Nativescript Toasty

Cross platform Toast-style messages created with NativeScript

## Usage
``` js
var toastyModule = require("nativescript-toasty");

var toast = new toastyModule.Toasty();
toast.show("Some message", 2000);
```

## Options


### Typical plugin development workflow

1. Make changes to plugin files
2. Make changes in `demo` that would test those changes out
3. `npm run demo.ios` or `npm run demo.android`  **(must be run from the root directory)**

