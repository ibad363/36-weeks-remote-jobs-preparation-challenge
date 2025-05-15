const mongoose = require("mongoose")
MONGO_URI = process.env.MONGODB_URI

mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("MongoDB is Connected!")
    })
    .catch((err)=>{
        console.log("MongoDB Connection Error: ",err)
    })