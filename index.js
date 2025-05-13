const http = require("http");
const math =  require('./math')
const PORT = 4000;
const server = http.createServer((req, res) => {


   res.setHeader("Content-Type", "text/plain");
   console.log( "mutliple" , math.multiplyFn(2, 9))
  res.end("Hello world");

});

server.listen(PORT, () => {
  console.log(`hello world ${PORT}`);
});
