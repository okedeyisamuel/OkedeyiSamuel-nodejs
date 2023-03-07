// It provides the functionality for working with URLs..Example is the parsing of a URL and logging its components. 
const url = require('url'); 
const urlString = 'http://needforspeed.com/xyz/abc?baz=qux'; 
const parsedUrl = url.parse(urlString, true);  
console.log(parsedUrl.protocol); // 'http:' 
console.log(parsedUrl.hostname); // 'needforspeed.com' 
console.log(parsedUrl.pathname); // '/xyz/abc' 
console.log(parsedUrl.query);    // { baz: 'qux' }

