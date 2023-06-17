const express = require('express')
const router = express.Router()
blogs = require('../Data/blogs')

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
router.get("/", (req, res) => {
    res.render("pages/home");
});
router.get("/about", (req, res) => {
    res.render("pages/about");
});
router.get("/blogs", (req, res) => {
    res.render("pages/blogs",blogs);
});
router.get("/add", (req, res) => {
    res.render("pages/add");
});
router.post("/add", (req, res) => {
    var ids = blogs.length
    const post = ({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      id:ids+1
    });
    blogs.push(post)
    res.redirect("/");
  });
  

module.exports = router


