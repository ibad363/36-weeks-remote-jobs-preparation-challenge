const { createTodo } = require("../Controllers/TodoController")

const router = require("express").Router()

router.get("/",(req,res)=>{
    res.send("All Task")
})

router.post("/", createTodo)

module.exports = router