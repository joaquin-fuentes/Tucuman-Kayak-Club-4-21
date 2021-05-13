// Modulos
const express = require("express")
const app = express()
const methodOverride = require('method-override');
const session = require('express-session');
const auth = require('./src/middlewares/auth');
const cors = require ("cors")

// Rutas
const mainRoutes = require("./src/routes/mainRoutes")
const usersRoutes = require("./src/routes/usersRoutes")
const apiRouter = require('./src/routes/apiRoutes')


// Configuración
app.use(express.static("public")) 
app.set("view engine", "ejs")
app.set("views", "src/views")

//middlewares
app.use(cors())

// Sessiones y cookies
app.use(session({
    secret: 'Mi sitio',
    resave: false, // no vuelve a guardar si no hay cambios
    saveUninitialized: true, // guarda sessiones aunque todavía no haya datos
}));

app.use(auth);
// Formularios
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.use("/",mainRoutes)
app.use("/users",usersRoutes)
app.use('/api', apiRouter);

// Iniciamos el servidor
app.listen(process.env.PORT || 3000,()=>{
    console.log("servidor corriendo en puerto 3000")
})

app.use((req,res,next) => {
    res.status(404).render("Error404/not-found")
})


