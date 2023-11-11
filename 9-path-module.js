// path module

// importing path module
const { log } = require('console');
const path=require('path');


// this return platform specific separator in file path
console.log(path.sep);


// this method joins a sequence of path segments 
// using that platform specific separator 
const filepath = path.join('tutorial','app.js');
console.log(filepath);


// this method gives final file name from a path
const base=path.basename(filepath);
console.log(base);

// this method return absolute path
const absolute=path.resolve(__dirname,'app.js');
console.log(absolute);