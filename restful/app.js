
const express = require("express" ) ; 
const usersRoutes = require("./routes/users")

const app = express(); 


app.use("/users" ,usersRoutes); 

//  middleware 
app.use((req, res) => {
  res.status(404).json({ error: "not found" }); 
});



app.listen(4000, () => {
    console.log("server is i running on port 4000");
})