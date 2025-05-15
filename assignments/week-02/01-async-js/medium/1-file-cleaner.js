const fs = require("fs")

fs.readFile("./file.txt","utf8",(err, data)=>{
    if (err){
        console.log("Error Reading file: ",err)
        return
    }
    
    console.log("File Content Before: ",data)
    
    const cleaned = data.replace(/\s+/g," ").trim()
    fs.writeFile("file.txt",cleaned,"utf8",(err)=>{
        if (err){
            console.log("Error Writing file: ",err)
            return
        }
        console.log("File cleaned and saved successfully!")
    })

    fs.readFile("file.txt","utf8",((err,data)=>{
            if (err){
            console.log("Error Reading file: ",err)
            return
        }
        console.log("File Content After: ",data)
    }))
})