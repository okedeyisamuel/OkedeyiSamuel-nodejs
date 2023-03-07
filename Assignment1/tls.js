// To implement TLS and SSL protocols 
      const tls = require('tls'); 
      const options = {
        host: 'example.com',
        port: 443
      };
      
      const client = tls.connect(options, () => {
        console.log('Connected to server!');
        client.write('Hello, server!');
      });
    