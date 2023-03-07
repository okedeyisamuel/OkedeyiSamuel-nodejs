// It provides information about the operating system. 
const os = require('os'); 
const totalMemory = os.totalmem(); 
console.log(`${totalMemory / 1024 / 1024} MB`); 
