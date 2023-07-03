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
    res.render("pages/blogs", blogs);
});
router.get("/upd/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = blogs.findIndex(obj => obj.id === id);
    const arr = {
        bl:blogs,
        ind:index
    }
    res.render("pages/update",arr);
});
router.post("/upd/:id", (req, res) => {
    const ids = parseInt(req.params.id);
    const index = blogs.findIndex(obj => obj.id === ids);
    if (index !== -1) {
        blogs.splice(index, 1);
        console.log("Object deleted successfully!");
    } else {
        console.log("Object not found.");
    }
    const post = ({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        id: ids + 1 
    });
    blogs.splice(index, 0, post);
    res.redirect("/blogs");

})

router.get("/add", (req, res) => {
    res.render("pages/add");  /*renders the page*/
});
router.get("/blogs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = blogs.findIndex(obj => obj.id === id);
    res.render("pages/pages", { blog: blogs[index] });
});
router.post("/add", (req, res) => {
    var ids = blogs.length
    const post = ({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        id: ids + 1 /*adds the content*/
    });
    blogs.push(post)
    res.redirect("/blogs");
});
router.post('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = blogs.findIndex(obj => obj.id === id);
    if (index !== -1) {
        blogs.splice(index, 1);
        console.log("Object deleted successfully!");
    } else {
        console.log("Object not found.");
    }
    res.redirect("/blogs");
});


module.exports = router


