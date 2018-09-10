/* jshint esversion : 6 */

// @root/index.js

const express = require("express");
const port = 8081;
const app = express();
const baseURL = `http://localhost:${port}`;
const api = require(__dirname + "/api")(app);

// APP CONFIG !!!
app.use(api.prefix, api.routers);
app.set("view engine", "ejs"); // CHECK THE DOC http://ejs.co/
app.set("views", __dirname + "/view"); //  précise à express le dossier des vues
// définition de ressources statiques...
app.use("/ejs", express.static(__dirname + "/node_modules/ejs"));
app.use(express.static(__dirname + "/public"));

// TEMPLATE VARS !!!
// Accessibles dans tout le template via app.locals (API express)
app.locals.site = {};
app.locals.baseURL = baseURL;
app.locals.site.title = "JS - Simple Express Template";
app.locals.site.description = "application utilisant node, express JS, ejs et mysql.";
app.locals.site.nav = [
  {label: "", route: "produit"},
];

// ROUTES DES PAGES DE l"APPLICATION
app.get("/", function(req, res) {
  res.render("index", {nom: "guillaume"});
  // on passe un objet ({nom: "gui"}) à la vue, utilisable dans le template EJS
});



app.get("/produit", function(req, res) {
  res.render("produit", {
    title: "Manage Produits"
  });
});


app.listen(port, function() {
  console.log("node server started on port " + port);
});
