# Proyecto Express - Pug
## Introduccion
Esta es un proyecto personal de una pagina web hecha totalmente con Nodejs, mas especificamente PUG y Express.

## Descripcion 
El Backend esta hecho con **Express**, de forma modular, todos los modulos estan importados con la sitaxis de CommondJS y los distintos archivos son:
    1. *src/app/app.js*: Aqui esta configurado el servidor.
    2. *src/server.js*: Aqui se inizializa el servidor.

La vista esta hecha con **PUG**, hay un [Layout principal](src/public/view/Layout/layout.pug) donde se almacena el esqueleto de nuestra pagina, este esqueleto se exporta a las distintas paginas para crear sus respectivas vistas reutilizando codigo.