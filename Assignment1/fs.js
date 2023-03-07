// It provides functionality for working with the file system 
const fs = require('fs'); 
fs.readFile('/path/to/file.txt', 'utf8', (err, data) => { 
  if (err) throw err; 
  console.log(data); 
}); 
