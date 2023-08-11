const list = require('../model/todo_list');

module.exports = (req,res)=>{
    
    list.create(req.body);

    res.redirect('back');
    
}