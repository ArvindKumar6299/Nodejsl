// CRUD onfiles using Asynchronous functions
// 1.  using callbacks 
//2. then catch
//3.  async await


// // - using callbacks

// //1. creating a file
// //method name =>  write file()
// // syntax ==> witeFile("path", cd)

// console.log("start");
// console.log("end");
// fs.writeFile("./data.txt", "utf-8", (err)=>{
//    //? error first callbacks

// })









//  2.)   using then catch

let fs = require("fs/promises");
// let fs  = require("fs").promises;
// every operation will return a promise

//! 1.  creating a file

// method name => writeFile()
// syntax ==>  fs.writeFile().then().catch()

console.log("Start");
console.log("middle");

let writeFile = fs.writeFile("./index.html", "html file");
// console.log(writeFile);
writeFile.then(() => {
    console.log("file created");
}).catch((err) => {
    console.log(err);
});

console.log("end");