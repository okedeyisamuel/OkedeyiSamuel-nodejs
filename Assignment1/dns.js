// Provides functions for working with DNS (Domain Name System). 
const dns = require('dns'); 
dns.lookup('www.google.com', (err, address, family) => { 
  console.log('address: %j family: IPv%s', address, family); 
}); 
