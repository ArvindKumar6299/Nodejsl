// Blocking or Synchronous code
console.log("start");
console.log("end");

setTimeout(()=>{
    for(let i=0;i<5;i++){
        console.log(i);
    }
},5000);
console.log("end");

let readFile = fetch("https://jsonplaceholder.typicde.com/todos/1");
 
console.log(readFile);

readFile.then((data)=>{
   console.log(data);
   let finalData = data.json();
   finalData.then((data)=>{
    console.log(data);
   }).catch((err)=>{
    console.log("Eroor had occured"+err);
   })
})
.catch((err)=>{
    console.log("error created!"+err);
})


async function callAPI(){
    let apicall = await fetch("http://jsonplaceholder.typicode.com/tods");

    let finalData = await apicall.json();
    console.log(finalData);

}
callAPI();


async function great(){
    console.log("HEllo dude!");
}

great();