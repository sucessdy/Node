const express = require("express");

const fs = require("fs").promises;
const path = require("path");

const router = express.Router();
const usersPath = path.join(__dirname, "../data/users.json");

// get the users

router.get("/", async (req, res) => {
  const data = await fs.readFile(usersPath, "utf-8");

  res.json(JSON.parse(data));
});

// get the user by id

router.get("/:id", async (req, res) => {
  const data = await fs.readFile(usersPath, "utf-8");
  const users = JSON.parse(data);
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }
  res.json(user);
});

module.exports = router;
