const list = require('../model/todo_list');

module.exports = async (req,res)=>{

    try{

        const lists = await list.find({});

            res.render('home',{
            title:'Todo-Lists',
            lists: lists
        });

    }catch(error){
        
        console.log('could not fetch the contacts form db',error);
    }
}