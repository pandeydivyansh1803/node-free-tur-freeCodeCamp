// global variables
// node js doesnt have window


// __dirname   - path to current directory
// __filename  - filename
// process   - info about current module (file)
// require   - function to use modules (common js)
// module    - info about environment where the program is being executed


console.log(__dirname);
console.log(__filename);
console.log(process);

setTimeout(()=>{
    console.log(`hello world`)
}, 1000);