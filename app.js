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
