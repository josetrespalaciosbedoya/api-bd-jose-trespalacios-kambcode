const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const sequelize = require('./config/database.js');
require('./models/student.js');
require('./models/course.js');
require('./models/enrollment.js');

app.use(express.json());

sequelize.sync()
  .then(() => console.log('Tablas creadas correctamente.'))
  .catch(err => console.error('No se pudo sincronizar la base de datos:', err));

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

module.exports = app;