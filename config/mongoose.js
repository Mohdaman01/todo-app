const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const passward = encodeURIComponent(process.env.passward);

mongoose.connect(`mongodb+srv://mohdastar200026:${passward}@cluster0.of2k5qc.mongodb.net/`);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open',function(){

    console.log('mongobd connected!'); 
    
});

// mohd faiz