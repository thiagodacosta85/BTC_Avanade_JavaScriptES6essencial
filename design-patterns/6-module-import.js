//6-module-import.js
const {getName, setName} = require('./5-module.js');

console.log(getName());
console.log(setName('Thiago'));
console.log(getName());

