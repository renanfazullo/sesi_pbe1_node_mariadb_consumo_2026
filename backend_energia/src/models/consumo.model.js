const con = require("../config/db");

const cadastrar = async ({usuarioId, local, equipamento, consumoKwh, mesReferencia, status}) => {
    const [resultado] = await con.query(
        "INSERT INTO consumo VALUES (DEFAULT, ?, ?, ?, ?, ?, ?);",
        [usuarioId, local, equipamento, consumoKwh, mesReferencia, status]
    );

    return {
        id: resultado.insertId,
        usuarioId,
        local,
        equipamento,
        consumoKwh,
        mesReferencia,
        status
    };
};

const listar = async () => {
    const [resultado] = await con.query(
        "SELECT * FROM consumo;"
    );

    return resultado;
};

const alterar = async (dados, id) => {
    const [resultado] = await con.query(
        "UPDATE consumo SET ? WHERE id = ?;",
        [dados, id]
    );

    return resultado;
};

const excluir = async (id) => {
    const [resultado] = await con.query(
        "DELETE FROM consumo WHERE id = ?;",
        [id]
    );

    return resultado;
};

const resumo = async () => {
    const [resultado] = await con.query(
        "SELECT AVG(consumoKwh) AS mediaKwh FROM consumo;"
    );

    return resultado[0];
};

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir,
    resumo
};