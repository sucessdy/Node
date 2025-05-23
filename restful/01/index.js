const express = require("express");
const users = require("./data.json");

const app = express();

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  //   todo
  return res.json({ status: "pending" });
});

app.patch("/api/users/:id", (req, res) => {
  //   todo
  return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
  //   todo
  return res.json({ status: "pending" });
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
