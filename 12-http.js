const http = require('http');


// http.createServer() method turns your computer into a HTTP server.
// http.createServer() method creates an HTTP Server object
// http server object can listen to ports on your computer and execute 
// a function , requestListener, each time a request is made
// the function passed into the createServer() method , will be executed when
// someone tries to access the computer on port 5000 which is specified below
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>OOps</h1>
    <p> we can't find what you are looking for</p>
    <a href="/">back home</a>`)
})


// the listen() method is used to specify what port our server will
// be listening to
server.listen(5000);



// by default if not mentioned in url
// request are sent to port 80
// otherwise we need to mention in url the 
// specific port number to send requests to 


// to run this type
// node app.js in terminal
// and then open
// localhost:5000 on browser