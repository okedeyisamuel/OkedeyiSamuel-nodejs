// This module provides various utility functions that are helpful for debugging and development. 
const util = require('util'); 
const obj = { 
  name: 'John', 
  age: 30, 
  city: 'New York' 
}; 
console.log(util.inspect(obj)); // prints a string representation of the object 
