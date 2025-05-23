const express = require("express");
const app = express();

const usersRoutes = require("./routes/users");
app.use("/api/user", usersRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "not found" });
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
