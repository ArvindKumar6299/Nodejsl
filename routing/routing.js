const http = require("http");
const fs  = require("fs");

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url === "/"){

        res.writeHead(200,"okk",{"Content-Type":"text/html"});
        let file =  fs.createReadStream("./demo.html","utf-8");
        file.pipe(res);
        // res.end("this is my home page")
    }else if(req.url === "/contact"){
        res.end("this is contact apge")
    }else if(req.url === "/download/package"){
        res.write("Hello Arvind")
        res.end()
        // res.end("this is about section apge")
    }
    else if(req.url === "/css"){
        res.writeHead(200, "its okay",{"Content-Type":"text/css"})
        fs.createReadStream("./demo.css","utf-8").pipe(res);
    }
})


server.listen(9000, (err)=>{
    if (err) console.log(err);

    console.log("server si running");
});