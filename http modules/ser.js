const http = require("http");
const fs = require("fs");


let server = http.createServer((req,res)=>{

//   res.writeHead(200, "okay", {"Content-type":"text/css"}) ; 
//   let data =   fs.createReadStream("css/style.css","utf-8");
//   data.pipe(res);

  res.writeHead(200, "okay", {"Content-type":"text/json"})

  let dataJson = fs.createReadStream("./data.json","utf-8");
  dataJson.pipe(res);
})

server.listen(4000, (err)=>{
    if (err) console.log(err);
    console.log("Server is running at port 4000");
})