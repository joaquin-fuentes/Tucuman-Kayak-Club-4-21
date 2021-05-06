module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido:{
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(40),
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
            type: dataTypes.INTEGER
        },
        edad: {
            type: dataTypes.INTEGER
        },
    }, {
        tableName: 'users',
        timestamps: false
    });
    
    return User;
}