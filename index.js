const express = require('express');
const app = express();
const db = require('./config/mongoose');
const path  = require('path');
const cors = require('cors');
const port = 3000;


require('dotenv').config();
app.use(cors());
app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));



app.use('/',require('./routes'));
 
app.listen(port,(error)=>{
    if(error){
        console.log('error: ',error);
    }
    console.log(`express sever is running on port http://localhost:${port}`);
})