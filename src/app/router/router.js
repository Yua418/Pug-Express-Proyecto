const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.render("./pages/index");
    next();
});

router.get("/gallery", (req, res, next) => {
    res.render("./pages/gallery");
    next();
});

router.get("/contact", (req, res, next) => {
    res.render("./pages/contact");
    next();
});

module.exports = router;