const express = require("express");

const fs = require("fs").promises;

const path = require("path");
const router = express.Router();
const usersPath = path.join(__dirname, "../data/users.json");

router.get("/", async (req, res) => {
  const data = await fs.readFile(usersPath, "utf-8");

  res.json(JSON.parse(data));
});

module.exports = router;
