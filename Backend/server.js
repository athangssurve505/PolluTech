const app = require("./src/app")
const {PORT} = require("./src/config/env.config")
const connectToDatabase = require("./src/config/database.config")

connectToDatabase();
app.listen(PORT,()=>{
    console.log("Server is Running")
})