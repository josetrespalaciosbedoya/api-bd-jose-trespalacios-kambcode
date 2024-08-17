const Student = require('../models/student');

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    console.log('Students:', students); // Agregar este console.log para ver los resultados
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los estudiantes.' });
  }
};

const createStudent = async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    const student = await Student.create({ first_name, last_name, email });
    console.log('Student:', student); // Aquí corregí el nombre de la variable
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el estudiante.' });
  }
};

module.exports = {
  getAllStudents,
  createStudent,
};