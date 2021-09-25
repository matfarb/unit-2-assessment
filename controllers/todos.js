const Todo = require('../models/todo');

function index(req, res){
    Todo.find({}, function(err, todos){
        res.render('index', {todos});
    });
};

async function create(req, res){
    const todo = new Todo({
        todo: req.body.todo,
        done: false
    });
    await todo.save();
    res.redirect('/'); 
}

function deleteTodo(req, res){
    const id = {_id: req.params.id};
    Todo.findOneAndDelete(id, function(err) {
        if (!err) {
            res.redirect('/');
        }
        else {
            message.type = 'error';
        }
    });
};

module.exports = {
    index,
    create,
    delete: deleteTodo
};