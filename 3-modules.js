// module in node 

// modules - encapsulated code only share minimum
// CommonJS - every file is module by default



// sayHi function is in a different module(file ) 5-utils.js
// john and peter are in a different module(file) 4-names.js


const names = require('./4-names');
const sayHi = require('./5-utils');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

// 7-mindgreande has function call which will automatically be executed irrespective
// of what we have exported from 7-mindgreande.js module
// here it runs the whole code when 7-mindgreande.js is require/ imported
require('./7-mindgrenade');