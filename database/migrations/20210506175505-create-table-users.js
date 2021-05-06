'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: {
            msg: 'El email necesita ser unico'
        },
        validate: {
            isEmail: {
                msg: 'Email no valido'
            },
            notEmpty: {
                msg: 'Ingrese un email'
            }}
        },
        cel: {
            type: Sequelize.INTEGER
        },
        edad: {
          type: Sequelize.INTEGER
      },
        contraseña:{
          type: Sequelize.STRING,
          allowNull: false
        },
        image: {
          type: Sequelize.STRING(200),
        }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
