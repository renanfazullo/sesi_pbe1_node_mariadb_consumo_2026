const express = require("express");
const routes = express.Router();

const {cadastrar, listar, alterar, excluir, resumo} = require("../controllers/consumo.controller");

routes.post("/cadastrar", cadastrar);
routes.get("/listar", listar);
routes.put("/alterar/:id", alterar);
routes.delete("/excluir/:id", excluir);
routes.get("/resumo", resumo);

module.exports = routes;