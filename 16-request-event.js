const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.write('welcome')
//     res.end()
// })

// using event emitter api
const server = http.createServer()

server.on('request',(req,res)=>{
    res.write('welcome')
    res.end()
})

server.listen(5000)

// behind the scenes
// server emits the 'request' event
// we listen to it using server.on('event',()=>{

// })

// also from documentation we can see that
// http extends net.Server
// which in turns extend EventEmitter class