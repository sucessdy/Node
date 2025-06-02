const express = require("express");
const fs = require("fs");

const users = require("./data.json");

const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));

app.get("/api/users", (req, res) => {
  const html = `<ul> 
 ${users.map((user) => ` <li> ${user.first_name} </li> `).join("")}
</ul>`;

  res.send(html);
});

app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.get("/users", (req, res) => {
 
  return res.json(users);
});

app.post("/api/users", (req, res) => {
  //   todo
  const body = req.body;
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./data.json", JSON.stringify(users), (error, data) => {
    return res.json({ status: "sucess", id: users.length });
  });
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
