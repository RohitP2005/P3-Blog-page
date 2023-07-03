const express = require("express");
const app = express();
let ejs = require("ejs");
const port = 3000;
const path = require("path");
const routes = require('./routes/routes')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use('/', routes)
// app.use('/about', birds)

app.listen(3000);
console.log("Server is listening on port 3000\nhttp://localhost:3000/ ");
