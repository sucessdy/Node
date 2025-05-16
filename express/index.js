require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello from Home Page" );
});

app.get("/about", (req, res) => {
    res.send("Hello from About Page" + " hey f" + req.query.name);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});