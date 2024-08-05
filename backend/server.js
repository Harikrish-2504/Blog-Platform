 const express = require("express")
 const dotenv = require("dotenv").config()
 const connectDB = require("./config/dbConnection")
 const errorHandler=require("./middleware/errorHandler")
 const bodyParser = require("body-parser")
 const cors = require('cors')



 const app = express()
 app.use(cors())
 connectDB();
 const PORT = process.env.PORT || 3001;
 app.use(errorHandler)
 app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

 app.use("/",require("./routes/blogRoutes"))

 app.listen(PORT,()=> {
    console.log(`The server is running on: http://localhost:${PORT}`);

 })
