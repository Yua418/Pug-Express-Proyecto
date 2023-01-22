# Proyecto Express - Pug
## Introduccion
Este es un proyecto personal de una SPA hecha totalmente con Nodejs, las vistas son creadas con PUG y el servidor es administrado utilizando Express.

La vercion 1 sera una plantilla base desde la cual se crearan otros proyectos personales.

## Descripcion 
### Express
El Backend esta hecho con **Express**, de forma modular, todos los modulos estan importados con la sitaxis de CommondJS y los distintos archivos son:

1. [app.js](src/app/app.js): Aqui esta configurado el servidor. Es donde se importan los datos del router, se configura el puerto, se agregan los middlewares y luego toda la informacion se envia a *server.js*.

2. [server.js](src/server.js): Aqui se inicia el servidor, resive todos los datos de *app.js*.

3. [router.js](src/app/router/router.js): Aqui se administra el Router, es decir todas las rutas de los archivos del servidor, para luego ser enviado a *app.js*

### PUG
La vista esta hecha con **PUG**, hay un [Layout principal](src/public/view/Layout/layout.pug) donde se almacena el esqueleto de nuestra pagina, a este esqueleto se importan las [hojas de estilo](src/public/css/style.css), los [scrips](src/public/js/script.js), el [footer](src/public/view/components/footer.pug) y el [header](src/public/view/components/header.pug).

El Layout principal forma un gran bloque de codigo que se ejecuta junto a la pagina que este corriendo en cada momento, ahorrando recursos y lineas de codiga ya que al inicializarse alguna de las paginas como la [pagina principal](src/public/view/pages/index.pug) o la pagina de [contactos](src/public/view/pages/contact.pug) solo se modificara el cuerpo, mientras que el Layout segira siendo el mismo.
