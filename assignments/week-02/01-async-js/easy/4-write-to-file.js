const fs = require("fs")

const content = "Hello! This file was written using fs.writeFile() in Node.js."

fs.writeFile("./file/output.txt",content,"utf-8", (err)=>{
    if (err){
        console.log("Error Writing file: ",err)
        return
    }
    console.log("File written Successfully!")
})

// Expensive operations
let sum = 0
for (let i=0; i < 1e8; i++){
    sum += 1
}
console.log("Finished expensive task:", sum);