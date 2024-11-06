const express = require('express');
const { addTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const router = express.Router();

router.post('/:projectId/todos', addTodo);
router.put('/:projectId/todos/:todoId', updateTodo);
router.delete('/:projectId/todos/:todoId', deleteTodo);

module.exports = router;
