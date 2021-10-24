const Task = require('../models/Tasks')
const asyncWrapper = require('../middelware/asyncWrapper')
const { createCustomError } = require('../db/customError')
const getAllTasks = asyncWrapper(async (req, res) => {
    const task = await Task.find()
    res.status(200).json(task)
})

const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with the given id of ${taskID}`, 404))
    }
    res.status(200).json(task)
})

const addTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task)
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return next(createCustomError(`No task with the given id of ${taskID}`, 404))
    }
    res.status(200).json(task)
})

const deleteTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params
    const task = await Task.findByIdAndDelete({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with the given id of ${taskID}`, 404))
    }
    res.status(200).json(task)
})

module.exports = {
    getAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask,
}