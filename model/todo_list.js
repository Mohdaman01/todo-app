const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true 
    },
    date:{
        type:String,
    }
});

const Todo_List = mongoose.model('Lists',contactSchema);

module.exports = Todo_List;