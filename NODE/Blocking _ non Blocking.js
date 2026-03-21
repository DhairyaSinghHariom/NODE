const { log } = require("console");
const fs = require("fs");

// Blocking 

// console.log("2");
// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);


// console.log("7");

console.log("2");
// Non-blocking

const Result = fs.readFile("contacts.txt", "utf-8", (err, Result) => {
  console.log(Result);
  
});


console.log("3");
console.log("4");
console.log("5");
console.log("6");




