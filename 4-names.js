// share
const john='john';
const peter='peter';

// local
const secret='super secret';


// now this prints the details of current module which is object
// it has an attrribute exports which is also an object


//console.log(module);
//console.log(typeof(module));



// in order to share john and peter we need to set them inside exports
module.exports={john, peter};