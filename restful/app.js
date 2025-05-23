
const express = require("express" ) ; 
const usersRoutes = require("./routes/users")

const app = express(); 


app.use("/users" ,usersRoutes); 

//  middleware 
app.use((req, res) => {
  res.status(404).json({ error: "not fount" }); 
});



app.listen(4000, () => {
    console.log("server is running on port 4000");
})