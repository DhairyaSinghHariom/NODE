// Event Module
const EventEmitter = require('events');

const event = new EventEmitter();

event.on('greet', () => {
    console.log('Hello, World!');
});

event.emit('greet');

// File System Module
const fs = require('fs');

fs.readFile('Data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});