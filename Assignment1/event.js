// It provides the functionality for working with events. Example is creating an event emitter and listening for an event. 
const { EventEmitter } = require('events'); 
const emitter = new EventEmitter(); 
emitter.on('my-event', (data) => { 
  console.log(data); 
}); 
emitter.emit('my-event', 'Hello, world!');  
