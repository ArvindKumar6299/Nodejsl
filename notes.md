# Routing - handling multiple end points


 ``` res.writeHead(200, "okay" , {"Content-Type":"text/html"});

    // sending html file using stream
    let readStream = fs.createReadStream("./index.html","utf-8");
    readStream.pipe(res); // pipe() is internaly call end().
    //pipe - it takes data from source and copy or set the data to destination
    // res.end();   ```