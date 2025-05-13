const http = require("http");
const fs = require("fs");
const url = require("url");

require("dotenv").config();

let port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/favicon.ico") return res.end();
  if (req.url == "/.well-known/appspecific/com.chrome.devtools.json")
    return res.end();

  const log = `${Date.now()} :${req.url}  New Request is coming!!\n`;

  const myUrl = url.parse(req.url, true);

  console.log(myUrl);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("<h1> Home Page </h1>");

        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`<h1>  Hi , ${username}</h1>`);

        break;

        case  '/search' : 
        const search = myUrl.query.search_query; 
        res.end(`<h1> Search the Query ${search} </h1>  `)
        break;
      case "/contact":
        res.end("<h1> Contact Page </h1>");

        break;

      default:
        res.end("<h1>404 :(  </h1>");
        break;
    }
  });
});

server.listen(port, () => {
  console.log(`server is running at : ${port} `);
});
