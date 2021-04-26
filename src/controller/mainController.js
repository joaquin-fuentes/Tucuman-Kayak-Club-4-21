
const mainController= {
    home: (req,res)=>{
        res.render("main/home.ejs")
    },
    
    contact: (req,res)=>{
        res.render("main/contact.ejs")
    },
    
    excursiones: (req,res)=>{
        res.render("main/excursiones.ejs")
    },
    actividades: (req,res)=>{
        res.render("main/actividades.ejs")
    },
    quienessomos: (req,res)=>{
        res.render("main/quienessomos.ejs")
    },
    alquiler: (req,res)=>{
        res.render("main/alquiler.ejs")
    },
    coaching: (req,res)=>{
        res.render("main/coaching.ejs")
    },
    escuelita: (req,res)=>{
        res.render("main/escuelita.ejs")
    }
    
    
}

module.exports = mainController

