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

module.exports = {
    createTodo
}