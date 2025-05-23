require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const homePage = require("./routes/home"); 
const aboutPage  = require("./routes/about")
app.use("/",  homePage); 
app.use("/about",  aboutPage); 

// Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 404 Handler — should be LAST!
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});