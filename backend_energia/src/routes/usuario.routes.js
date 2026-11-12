const express = require("express");
const routes = express.Router();

const {cadastrar, listar, alterar, excluir, login} = require("../controllers/usuario.controller");

routes.post("/cadastrar", cadastrar);
routes.get("/listar", listar);
routes.put("/alterar/:id", alterar);
routes.delete("/excluir/:id", excluir);
routes.post("/login", login);

module.exports = routes;