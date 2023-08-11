const { default: mongoose } = require('mongoose');
const moongoose  = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:/todo-list');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open',function(){

    console.log('mongobd connected!'); 
    
});