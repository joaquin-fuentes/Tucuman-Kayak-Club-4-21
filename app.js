
const express = require("express")
const app = express()
const methodOverride = require('method-override');

const mainRoutes = require("./src/routes/mainRoutes")
const usersRoutes = require("./src/routes/usersRoutes")


app.listen(3000,()=>{
    console.log("servidor corriendo en puerto 3000")
})


app.set("view engine", "ejs")
app.set("views", "src/views")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.use("/",mainRoutes)
app.use("/users",usersRoutes)



app.use((req,res,next) => {
    res.status(404).render("Error404/not-found")
})


