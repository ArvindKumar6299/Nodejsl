// 1. import 
// 2. createServer()
// 3. port -> listen
// 4. listen(portNo, cb)

let http = require("http");
const fs = require("fs");

let server = http.createServer((req, res)=>{
    //write mtd helps to display messg on UI
    // res.write("hello  from server");
    // res.write("<h1>Node Classes</h1>");

    // console.log(req);    
    
    //setting header -  response status , status msg, content-type
    res.writeHead(200, "ok printing", {"Content-Type":"text/html"})

    // to display HTML file
    let data = fs.readFileSync("./index.html", "utf-8");
    res.write(data);
    
    res.end();  //current request-response cycle ko end kra ga
});

server.listen(4000, (err)=>{
    // error first callbacks
    if(err) console.log(err);
    console.log("server is runnining at port 4000!");
})