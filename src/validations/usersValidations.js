
const { check } = require('express-validator');

module.exports = {
    register: [
        // Usamos el name del campo
        check('nombre')
            .notEmpty().withMessage('Debes completar el nombre')
            .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres')
            .isLength({ max: 20 }).withMessage('El nombre debe tener menos de 20 caracteres'),
        check('apellido').notEmpty().withMessage('Debes completar el apellido'),
        check('email') 
                       .notEmpty().withMessage('Debes completar el campo Email').bail()
                       .isEmail().withMessage('Debes completar un email valido'),
        check('cel').notEmpty().withMessage('Debes completar el celular'),
        check('edad').notEmpty().withMessage('Debes completar la edad'),
        check('contraseña').notEmpty().withMessage('Debes completar la contraseña')
                           .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres')
                           .isLength({ max: 20 }).withMessage('La contraseña debe tener menos de 20 caracteres'),
        
    ],
    update: [
        // Validamos el login
        check('nombre')
        .notEmpty().withMessage('Debes completar el nombre')
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres')
        .isLength({ max: 20 }).withMessage('El nombre debe tener menos de 20 caracteres'),
    check('apellido').notEmpty().withMessage('Debes completar el apellido'),
    check('email').isEmail().withMessage('Debes completar un email valido'),
    check('cel').notEmpty().withMessage('Debes completar el celular'),
    check('edad').notEmpty().withMessage('Debes completar la edad'),
    check('contraseña').notEmpty().withMessage('Debes completar la contraseña')
                       .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres')
                       .isLength({ max: 20 }).withMessage('La contraseña debe tener menos de 20 caracteres'),
    ]
}