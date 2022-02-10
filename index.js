require("dotenv/config"); // definindo variavel de ambiente
require("./database");  // deinindo variavel database

const express = require("express"); 
const exprhbs = require("express-handlebars");

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.engine('handlebars', exprhbs.engine());
app.set('view engine', "handlebars");

// Rotas
const routes = require("./routes");
app.use(routes);

app.listen(3000);