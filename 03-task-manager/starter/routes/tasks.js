const express = require('express')
const route = express.Router()
const { getAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask, } = require('../controllers/tasks')

route.route('/').get(getAllTasks).post(addTask)
route.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = route
