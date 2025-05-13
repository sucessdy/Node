const http = require("http"); 
const fs =  require("fs")
const myServer = http.createServer((req, res) => {  
  const log = (`${Date.now()} : New Request\n`)
  fs.appendFile("test.txt", log, (err, data) => {
  // console.log(req); 
  res.end("Hello from end")
  })

})

myServer.listen(4444, () => {
  console.log("server started")
})