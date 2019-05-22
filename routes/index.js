import express from 'express';
import db from '../db.js';
import todoController from '../todosController/todos.js'

const router = express.Router();

router.get( '/api/v1/todos', todoController.getAllToDos)
router.post('/api/v1/todos', todoController.createToDo)
router.get('/api/v1/todos/:id', todoController.getTodo)
router.delete('/api/v1/todos/:id', todoController.deleteTodo)
router.put('/api/v1/todos/:id', todoController.updateTodo)

  export default router