//  provides a way to create HTTPS servers and clients. 
const https = require('https'); 
https.get('https://www.google.com', (res) => { 
  console.log('statusCode:', res.statusCode); 
  console.log('headers:', res.headers); 
  res.on('data', (d) => { 
    process.stdout.write(d); 
  }); 
}); 
