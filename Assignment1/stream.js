// It provides functionality for working with streams of data. 
const fs = require('fs'); 
const { Writable } = require('stream'); 
const writeStream = fs.createWriteStream('/path/to/output.txt'); 
const data = 'Hello, world!'; 
writeStream.write(data); 
