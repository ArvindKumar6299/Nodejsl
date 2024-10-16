1. import 
2. createServer()
3. port -> listen
4. listen(portNo, cb)

let http = require("http");
const fs = require("fs");

# write mtd helps to display messg on UI  - res.write("hello");
    res.write("hello  from server");


# to display HTML file
    let data = fs.readFileSync("./index.html", "utf-8");
    res.write(data);    


# to display something on UI we use write()


#  // sending html file using stream
```    let readStream = fs.createReadStream("./index.html","utf-8");
    readStream.pipe(res); // pipe() is internaly call end().
    //pipe - it takes data from source and copy or set the data to destination
 ```