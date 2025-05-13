const fs  = require("fs"); 
// fs.writeFileSync("./test.txt", "hey there it's a text file ")
// console.log("1"); 
fs.readFile("./test.txt", 'utf-8' , (err , result) => {

    console.log(result)
});

console.log("2");