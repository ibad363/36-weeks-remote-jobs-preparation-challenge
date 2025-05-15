const fs = require("fs")

// 1. Async file read
fs.readFile("./file/example.txt", "utf8",(error,data)=>{
    if (error){
        console.log("Error reading file: ",error)
        return
    }
    console.log("File Contents: \n",data)
})

// 2. Expensive operation (loop for delay)
let start = Date.now();
let sum = 0
for (let i= 0; i < 1e8;i++){
    sum += 1
}
let end = Date.now();
console.log("Time taken (ms):", end - start);
console.log("Finished Expensive Operation: ", sum)