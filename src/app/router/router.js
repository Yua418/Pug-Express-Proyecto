const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.render("./pages/index");
    myTitle= "Inicio";
    next();
});

router.get("/gallery", (req, res, next) => {
    res.render("./pages/gallery");
    myTitle= "Galeria";
    next();
});

router.get("/contact", (req, res, next) => {
    res.render("./pages/contact");
    myTitle= "Contactos";
    next();
});

module.exports = router;