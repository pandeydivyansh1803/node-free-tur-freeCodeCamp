// events 
// eg : user clicks a button
// eg : user hover over a link

// event driven programming used heavily in node.js
// we listen for specific events and register functions that will
// execute in response to those events



// EventEmitter is a class
// events module returns a class
const EventEmitter = require('events')


// create object of EventEmitter class
const customEmitter = new EventEmitter()


// on - listen for an event
// emit - emit an event

// first parameter is string and second is callback
// first parameter string is the name of the event
// second parameter is what is to be done when that event occurs
customEmitter.on('response',(name,age)=>{
    console.log(`data received ${name} , ${age}`)
})


// we can have multiple different callbacks for the same event
customEmitter.on('response',()=>{
    console.log('some other logic')
})


// used to emit an event with name response
customEmitter.emit('response','john',34)


// note: order of on and emit is important
// always first listen for an event and then emit one
// we can pass arguments from emit function and take it
// as parameter in listen
