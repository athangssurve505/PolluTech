const mongoose = require("mongoose");
const {MONGO_URI} = require("../config/env.config")

async function connectToDatabase(){
    try{
        await mongoose.connect(`${MONGO_URI}pollutrack`)
        console.log("Connected to Database")
    }catch(err){
        console.log("Error:",err.message)
    }

}


module.exports = connectToDatabase