const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
router.get("/", (req, res) => {
    res.render("pages/index");
});
router.get("/about", (req, res) => {
    res.render("pages/about");
});


module.exports = router