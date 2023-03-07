// It provides cryptographic functionality, such as creating secure hashes and generating random numbers. Example: creating a secure hash of a password: 
const crypto = require('crypto'); 
const password = 'mysecretpassword'; 
const hash = crypto.createHash('sha256').update(password).digest('hex'); 
console.log(hash); 
