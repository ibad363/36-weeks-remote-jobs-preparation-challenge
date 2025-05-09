const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    },
})

const todoModel = mongoose.model("todos",todoSchema)
module.exports = todoModel