const app = require('./app'); // Importación del módulo app.

// Configuración del puerto de nuestra aplicación.
const PORT = process.env.PORT || 3000;

// Iniciar el servidor del proyecto en el puerto configurado.
app.listen(PORT, () => {
  console.log(`Servidor esta siendo escuchado en el puerto ${PORT}`);
});