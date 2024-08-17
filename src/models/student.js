const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    timestamps: true, // Esto crea los campos createdAt y updatedAt automáticamente
    tableName: 'students', // Esto es opcional si quieres especificar el nombre de la tabla en la BD
});

module.exports = Student;
