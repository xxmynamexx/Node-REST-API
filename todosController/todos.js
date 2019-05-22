import db from '../db.js';
class ToDosController{
    getAllToDos(req, res){
        res.status(200).send({
            success: 'true',
            message: 'todos retrieved successfully',
            todos: db,
        })
    }

    createToDo(req, res){
        if(!req.body.title){
            return res.status(400).send({
                success: 'false',
                message: 'Title is required'
            })
        }
    
        if(!req.body.description){
            return res.status(400).send({
                success: 'false',
                message: 'Description is required'
            })
        }
    
        const todo = {
            id: db.length + 1,
            title: req.body.title,
            description: req.body.description,
        }
        db.push(todo);
        return res.status(400).send({
            success: 'true',
            message: 'todo added successfully',
            todo
        })  
    }

    getTodo(req, res){
        console.log('Req params is: ', req.params)
        const id = parseInt(req.params.id)
        console.log('id is : ', id)
        let result =  db.findIndex(x => x.id == id)
        console.log('result ', result)
        if(result != -1){
           return res.status(200).send({
                success: 'true',
                message: 'Retrieved todo',
                todo: db[result]
            })
        } else {
            res.status(404).send({
                success: 'false',
                message: 'todo does not exist',
            })
        }
    }

    deleteTodo(req, res){
        const id = parseInt(req.params.id)
        let result = db.findIndex(x => x.id == id)
        if(result != -1){
            db.splice(result, 1)
            return res.status(200).send({
                success: 'true',
                message: 'Todo deleted successfully',
            })
        } else {
            res.status(404).send({
                success: 'false',
                message: 'Todo not found'
            })
        }
    }

    updateTodo(req, res){
        const id = parseInt(req.params.id);
        let result = db.findIndex(x => x.id == id)
        console.log('id is: ', id)
        console.log('db is: ', db)
        console.log(result)
        if(result != -1){
            if(!req.body.title){
                return res.status(400).send({
                    success: 'false',
                    message: 'title is required',
                })
            }
    
            if(!req.body.description){
                return res.status(400).send({
                    success: 'false',
                    message: 'description is required',
                })
            }
    
            let updatedTodo = {
                id,
                title: req.body.title,
                description: req.body.description,
            }
            console.log('runs')
    
            db.splice(result, 1, updatedTodo)
            return res.status(200).send({
                success: 'true',
                message: 'Todo updated',
                todo: updatedTodo
            })
        } else {
            return res.status(404).send({
                success: 'false',
                message: 'Todo not found',
            })
        }
    }





}

let todoController = new ToDosController();

export default todoController