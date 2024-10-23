//importing the module
const express = require("express");


//!  calling/invoking top level function

const app = express();


//routing part
app.get("/about",(req, res) =>{
    res.write("Hello duniya");
    res.send("about page");
    res.end();
})

app.get("*", (req, res)=>{
    res.send("page not found");
})

//port assign
app.listen(4000, (err)=>{
    if (err)  console.log(err);
    console.log("Server is running.....");
})