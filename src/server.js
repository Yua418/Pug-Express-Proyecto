const app = require("./app/app");

const port = app.get("port");

app.listen(port, () => {
    console.log("El servidor se esta ejecutando correctamente en el puerto", port);
});