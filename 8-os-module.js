// built in modules
// os path fs(file system) http

// os module provides many important properties and methods for
// interacting with the os


// importing os module
const os = require('os');

// info about current user
const user=os.userInfo();
console.log(user);

// method return system uptime in seconds
const time = os.uptime();
console.log(`The system uptime is ${time}`);


const currentOS = {
    name: os.type(),
    release : os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
};

console.log(currentOS);
