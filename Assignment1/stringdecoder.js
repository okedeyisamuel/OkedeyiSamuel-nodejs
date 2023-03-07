// string_decoder provides a way to decode strings into their original encoding. 
const { StringDecoder } = require('string_decoder'); 
const decoder = new StringDecoder('utf8'); 
console.log(decoder.write(Buffer.from([0xE2, 0x82, 0xAC]))); 
