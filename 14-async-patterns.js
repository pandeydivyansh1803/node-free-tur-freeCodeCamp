// const {readFile , writeFile} = require('fs')

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.write('home page')
//         res.end()
//     }
//     else if(req.url === '/about'){
//         res.write('about page')
//         res.end()
//     }
//     else{
//         res.write('error page')
//         res.end()
//     }
//    // res.end('error page ')
// })

// server.listen(5000,()=>{
//     console.log('Server is listening on port 5000 ......')
// })












const {readFile,writeFile} = require('fs')

// normal method of doing readFile in async fashion

// readFile('./content/first.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//         console.log('using normal callback')
//         return
//     }
//     else{
//         console.log(data)
//         console.log('using normal callback')
//     }
// })















// using promises 

// const getData = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// const setData = (first,second,path)=>{
//     return new Promise((resolve,reject)=>{
//         writeFile(path,`${first} , ${second}`,(err,result)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve()
//             }
//         })
//     })
// }


// let first=""
// let second=""
// // very imp how nesting of promises is done using multiple then blocks
// getData('./content/first.txt').then((data)=>{
//     console.log(data)
//     console.log('using promise')
//     first= data
//     return getData('./content/second.txt')
// }).then((data)=>{
//     console.log(data)
//     console.log('using promise')
//     second= data
//     return setData(first,second,'./content/tmp_result.txt')
// }).then(()=>{
//     console.log('done successfully')
// })
// .catch((err)=>{
//     console.log(err)
//     console.log('using promise')
// })


















// using async await without using promisify

// async and await
// await can only be used with async function
// await is used when the function returns a promise 
// await waits for the promise to resolve
// since readFile doesn't return promise we need a
// wrapping functions to set them as promise and then
// use async await with them


// const getDataAsync = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// const setDataAsync = (first,second,path)=>{
//     return new Promise((resolve,reject)=>{
//         writeFile(path,`${first} , ${second}`,(err,result)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve()
//             }
//         })
//     })
// }


// here getDataAsync and setDataAsync are wrapping 
// functions to set readFile and writeFile as promise 
// and then use async await

// const start = async ()=>{
//     try{
//         console.log('using async await without promisfy')
//         const first = await getDataAsync('./content/first.txt')
//         const second = await getDataAsync('./content/second.txt')
//         console.log(first)
//         console.log(second)
//         await setDataAsync(first,second,'./content/tmp_result.txt')
//     }catch(error){
//         console.log(error)
//     }
    
// }

// start()



















// problem with above approach is to create wrapping 
// functions every time to set readFile and writeFile 
// to return promise so that we can use async await

// node has a solution to above problem
// util : this is a module which proposes a solution for this problem
// promisify : takes a function (here readFile , writeFile)
// and turn it into a function that returns a promise


const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const func = async ()=>{

    try{
        console.log('using async await with promisify')
        const first = await readFilePromise('./content/first.txt','utf8')
        const second = await readFilePromise('./content/second.txt','utf8')

        console.log(first)
        console.log(second)

        await writeFilePromise('./content/tmp_result.txt',`This is awesome ${first} ${second}`)
    }
    catch(error){
        console.log(error)
    }
    
}

func()



// another shortcut to use promisify is (********very imp ********)
// const {readFile , writeFile} = require('fs').promises
// now both readFile and writeFile are async functions as well as return promises
// this is the best way