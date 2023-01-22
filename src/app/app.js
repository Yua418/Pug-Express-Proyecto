const express = require("express");
const morgan = require("morgan");
const router = require("./router/router");

const app = express();
const statics = __dirname.replace("app", "public"); // __dirname toma la ubicacion actual, remplazamos app por public para tomar la ruta de esa carpeta

app.set("port", process.env.PORT || 4000); //Creamos la variable del puerto
app.set("views", "./src/public/view"); // Especificamos la ubicacion del template engine
app.set("view engine", "pug"); // Habilitamos PUG

// Middlewares
app.use(morgan("dev")); // Usamos Morgan para ver los estados de las peticiones del servidor
app.use(express.static(statics)); // Habilitamos los archivos estaticos (CSS, Scrips...)
app.use((req, res, next) => {
    const year = new Date; // Crea en todas las paginas una variable "thisYear" con el año actual
    res.locals.thisYear = year.getFullYear();
    next();
});
app.use(router); // importamos el router

module.exports = app;