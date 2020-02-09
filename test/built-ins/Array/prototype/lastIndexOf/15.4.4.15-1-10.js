// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.lastindexof
es5id: 15.4.4.15-1-10
description: Array.prototype.lastIndexOf applied to the Math object
---*/

Math.length = 2;
Math[1] = 100;

assert.sameValue(Array.prototype.lastIndexOf.call(Math, 100), 1, 'Array.prototype.lastIndexOf.call(Math, 100)');
