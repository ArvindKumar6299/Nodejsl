let http = require("http");
const fs = require("fs");


let server = http.createServer((req,res)=>{

   res.writeHead(200, "okay" , {"Content-Type":"text/html"});

    // sending html file using stream
    let readStream = fs.createReadStream("./index.html","utf-8");
    readStream.pipe(res); // pipe() is internaly call end().
    //pipe - it takes data from source and copy or set the data to destination
    // res.end();
})

server.listen(5000, (err)=>{
   if(err) console.log(err);

   console.log("my server is running at 5000!")
})