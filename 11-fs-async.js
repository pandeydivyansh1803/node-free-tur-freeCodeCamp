// fs
// file system module
// using this module we can interact with the file system
// this was not possible in browser js


// there are two flavours for fs module
// 1) sync i.e, blocking
// 2) async i.e, not blocking



// async flavour of fs module
const { readFile , writeFile } = require('fs');




console.log('start');




// readFile
// this is async method
// here we need to provide a callback
// callback is run when we are done with a given work and then run callback
// readFile function will have 3 parameters
// first parameter is file path
// second paramter is encoding by default utf8
// third paramter is callback function
// callback function will have two parameters err and result

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    
});

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result;

        writeFile('./content/result-async.txt',`The result is ${first} ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task');
        })
        
    })
});



console.log('starting next task');



// writeFileSync
// the first parameter is file name and the second is the 
// contents to be written inside the file
// in the call back provided with writeFile we don't need or have result 
// it's useless, hover mouse over it to understand

// case-1) if file is not present node will create one
// case-2) if file is present then it will be overwritten


// here no file as result-sync.txt was present
// so node created one inside the given file path name
//writeFileSync('./content/result-sync.txt',
   //             `Here is the result ${first} , ${second}`);




// way to append to a file instead of overwrite all content
//writeFileSync('./content/result-sync.txt' , `hello world`
  //              ,{flag : 'a'});
