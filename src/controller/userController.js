
const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const usersTable = jsonTable('users');
const { validationResult } = require('express-validator');

module.exports = {
    listado: (req, res) => {
        let users = usersTable.all()

        res.render('users/listado', {  
            users       
        });
    },
    login: (req,res) =>{
        res.render("users/login")
    },
    create: (req, res) => {
        res.render('users/create');
    },
    store: (req, res) => {
        // Valido los campos
        let errors = validationResult(req);

        // Me fijo si no hay errores
        if (errors.isEmpty()) {
            // Genero el nuevo usuario
            let user = req.body;

            if (req.file) {
                user.image = req.file.filename;
            }

            let userId = usersTable.create(user);

            res.redirect('/users/');
        // Si hay errores
        } else {
            // Renderizo el formulario nuevamente con los errors y los datos completados
            return res.render('users/create', { errors: errors.mapped(), old: req.body });
        }
    },
    edit: (req, res) => {
        let user = usersTable.find(req.params.id);

        res.render('users/edit', { user });
    },
    update: (req, res) => {
        let user = req.body;
        user.id = Number(req.params.id);

        // Si viene una imagen nueva la guardo
        if (req.file) {
            user.image = req.file.filename;
        // Si no viene una imagen nueva, busco en base la que ya había
        } else {
            oldUser = usersTable.find(user.id);
            user.image = oldUser.image;
        }

        let userId = usersTable.update(user);

        res.redirect('/users/' );
    },
    destroy: (req, res) => {
        let users = usersTable.all()

        usersTable.delete(req.params.id);

        res.redirect('/users');
    }
}