const { createServer } = require('node:http');
// const math  = require('./math'); 
const port = 8000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
//   console.log("Math value", math.addFn(2, 3))
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
