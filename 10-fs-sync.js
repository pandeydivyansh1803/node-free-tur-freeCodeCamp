// fs
// file system module
// using this module we can interact with the file system
// this was not possible in browser js


// there are two flavours for fs module
// 1) sync i.e, blocking
// 2) async i.e, not blocking



// sync flavour of fs module
const { readFileSync , writeFileSync } = require('fs');


console.log('start');


// readFileSync
// first parameter is file path
// second paramter is encoding which is by default utf8
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');


console.log(first);
console.log(second);



// writeFileSync
// the first parameter is file name and the second is the 
// contents to be written inside the file

// case-1) if file is not present node will create one
// case-2) if file is present then it will be overwritten


// here no file as result-sync.txt was present
// so node created one inside the given file path name
writeFileSync('./content/result-sync.txt',
                `Here is the result ${first} , ${second}`);




// way to append to a file instead of overwrite all content
writeFileSync('./content/result-sync.txt' , `hello world`
                ,{flag : 'a'});



