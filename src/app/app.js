const express = require("express");

const app = express();

app.set("port", process.env.PORT || 4000); //Creamos la variable del puerto
app.set("views", "./src/public/view"); // Especificamos la ubicacion del template engine
app.set("view engine", "pug"); // Habilitamos PUG

app.get("/", (req, res) => {
    res.render("./pages/index");
});

module.exports = app;