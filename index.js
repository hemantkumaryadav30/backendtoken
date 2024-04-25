const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send({"message":"Hello World!"});
})

app.listen(4000, ()=>{
    console.log("server is running on the port no 4000");
})