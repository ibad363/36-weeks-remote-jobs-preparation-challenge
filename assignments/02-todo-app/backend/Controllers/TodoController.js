const todoModel = require("../Models/TodoModel")

const createTodo = async (req, res) =>{
    const data = req.body
    try {
        const model = new todoModel(data)
        await model.save()
        res.status(201).json({message: "Task is Created", success: true})
    } catch (error) {
     res.status(500).json({message: "Failed to create Todo", success: false})   
    }
}

const getAllTodo = async (req, res) =>{
    try {
        const data = await todoModel.ge
        await model.save()
        res.status(201).json({message: "Task is Created", success: true})
    } catch (error) {
     res.status(500).json({message: "Failed to get Todos", success: false})   
    }
}

module.exports = {
    createTodo
}