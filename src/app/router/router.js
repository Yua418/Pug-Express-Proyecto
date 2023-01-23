const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.render("./pages/index");
    myTitle= "Inicio";
    next();
});

router.get("/cursos", (req, res, next) => {
    res.render("./pages/cursos");
    myTitle= "Cursos";
    next();
});

router.get("/contact", (req, res, next) => {
    res.render("./pages/contact");
    myTitle= "Contacto";
    next();
});

router.get("/nosotros", (req, res, next) => {
    res.render("./pages/nosotros");
    myTitle= "Nosotros";
    next();
});

router.get("/entrada", (req, res, next) => {
    res.render("./pages/entrada");
    myTitle= "Articulo";
    next();
});

module.exports = router;