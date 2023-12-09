const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
const port = process.env.PORT;
app.listen(port,()=>{
    console.log("Server is runnig...",port);
})