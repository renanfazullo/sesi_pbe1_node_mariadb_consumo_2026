const consumoModel = require("../models/consumo.model");

const cadastrar = async (req, res) => {
    try {
        const resposta = await consumoModel.cadastrar(req.body);
        res.status(201).json(resposta).end();
    } catch (error) {
        res.status(500).json({erro: error.message}).end();
    }
};

const listar = async (req, res) => {
    try {
        const resposta = await consumoModel.listar();
        res.status(200).json(resposta).end();
    } catch (error) {
        res.status(500).json({erro: error.message}).end();
    }
};

const alterar = async (req, res) => {
    try {
        const resposta = await consumoModel.alterar(req.body, req.params.id);

        if (resposta.affectedRows == 1) {
            res.status(200).end();
        } else {
            res.status(404).json({erro: "Consumo não encontrado"}).end();
        }
    } catch (error) {
        res.status(500).json({erro: error.message}).end();
    }
};

const excluir = async (req, res) => {
    try {
        const resposta = await consumoModel.excluir(req.params.id);

        if (resposta.affectedRows == 1) {
            res.status(200).json({mensagem: "Consumo excluído com sucesso"}).end();
        } else {
            res.status(404).json({erro: "Consumo não encontrado"}).end();
        }
    } catch (error) {
        res.status(500).json({erro: error.message}).end();
    }
};

const resumo = async (req, res) => {
    try {
        const resposta = await consumoModel.resumo();
        res.status(200).json(resposta).end();
    } catch (error) {
        res.status(500).json({erro: error.message}).end();
    }
};

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir,
    resumo
};