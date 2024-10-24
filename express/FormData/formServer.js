const express = require("express");
const { Collection } = require("mongodb");
const fs = require("node:fs");


const app = express();

app.use(express.urlencoded({extened: true}));


//! connectDb()

//routing part

//home page
app.get("/",(req,res)=>{

    // let arvind = fs.createReadStream("./public/index.html");
    // res.write(arvind);
    // res.end();
    fs.createReadStream("./public/index.html").pipe(res);
    
})
//form page
app.get("/form",(req,res)=>{
   fs.createReadStream("./public/form.html").pipe(res);
})

//contact page
app.get("/contact",(req,res)=>{
    fs.createReadStream("./public/contact.html").pipe(res);
})

//404 page
app.get("*", (req,res)=>{
    res.send(`You are on wrong page!`)
})

//app.post se client se data server pe aata hai
app.post("/abc", (req,res)=>{
    //? use this endpoint  in the form action
    //? set form method = post
    //?   use name attribute in the input
   
    let payload = req.body;   //req.body- >
    console.log(payload);
    res.send(payload);
    // Collection.insertOne(payload)
})


//listen part
app.listen(5000, (err)=>{
    if (err) console.log(err);
    console.log(`server is running... at local host 5000`);
});
