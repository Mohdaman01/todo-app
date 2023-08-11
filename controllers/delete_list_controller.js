const list = require('../model/todo_list');

module.exports = async (req,res)=>{

    const id =  req.query.id;

    try{

        await list.findByIdAndDelete(id);

    }catch(error){
        
        console.log('could not delete the contact',error);
    }

    return res.redirect('back');

}