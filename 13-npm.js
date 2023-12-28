// npm stands for node package manager
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)


// package.json - manifest file (stores important info about our project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everthing default)


// we have already installed loadsh using npm i loadsh and then
// import it
const _ = require('loadsh')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)


// when we push to github 
// we don't push node modules i.e, dependenices
// because of large size
// when we download a repo with package.json
// then we just need the command
// npm install to install all dependencies 
// mentioned in the package.json file




// .gitignore
// this will have files not to be pushed
// we will include node_modules which contains dependencies inside this file



// git init (git initialize karna)
// git add (.)

// inside .gitignore we have /node)modules
// once we clone this repo since we have package.json which has detials of dependencies
// we can use npm install command to install all dependencies




// npm install <packagename> -D
// this will save package as dev dependency
// dev dependency is something which is required only
// during the development and not during production
// nodemon is used for restarting the application 
// when we deploy the app we will use something other 
// than nodemon for this purpose



// scripts object in package.json
// here we can write npm  commands and corresponding code 
// for the same



// ctrl + c for stopping nodemon 


// uninstall package
// command : npm uninstall <packageName>