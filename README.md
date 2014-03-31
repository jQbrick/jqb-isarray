jqb-isarray
===========

Minimal utility method to detect if given value is an _Array_:

    var isArray = require('jqb-isarray');
    isArray([1, 2, 3]);     // true
    isArray({a:1,b:2,c:3}); // false
    
> The implementation is heavily inspired to _UnderscoreJS_:  
> [http://underscorejs.org/#isArray](http://underscorejs.org/#isArray)
    
## Run Tests

If you want to run tests on this module you can prompt:

    npm install && grunt