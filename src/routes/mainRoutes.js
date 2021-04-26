
const express = require ("express")

const mainController = require ("../controller/mainController")

const router = express.Router()

router.get ("/", mainController.home);

router.get ("/contact", mainController.contact);

router.get ("/excursiones", mainController.excursiones);

router.get ("/actividades", mainController.actividades);

router.get ("/quienes-somos", mainController.quienessomos);

router.get ("/alquiler", mainController.alquiler);

router.get ("/coaching", mainController.coaching);

router.get ("/escuelita", mainController.escuelita);


 module.exports = router