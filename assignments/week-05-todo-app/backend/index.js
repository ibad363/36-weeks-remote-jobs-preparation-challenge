const express = require("express")
const app = express()
require("dotenv").config()
require("./Models/db")
const PORT = process.env.PORT || 8080
const TodoRouter = require("./Routes/TodoRoutes")

// to parse request body in json
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Hello from Server")
})

app.use("/todos",TodoRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT}`)
})