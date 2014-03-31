/**
 * jQbrick - isArray()
 * (http://underscorejs.org/#isArray)
 *
 * return true if the given input is an array
 * 
 */

'use strict';

module.exports = Array.isArray || function(obj) {
    return toString.call(obj) == '[object Array]';
};
