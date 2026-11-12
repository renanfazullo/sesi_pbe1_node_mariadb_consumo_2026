const con = require("../config/db");

const cadastrar = async ({nome, email, senha}) => {
    const [resultado] = await con.query(
        "INSERT INTO usuario VALUES (DEFAULT, ?, ?, PASSWORD(?));",
        [nome, email, senha]
    );

    return {
        id: resultado.insertId,
        nome,
        email
    };
};

const listar = async () => {
    const [resultado] = await con.query(
        "SELECT id, nome, email FROM usuario;"
    );

    return resultado;
};

const alterar = async (dados, id) => {
    const [resultado] = await con.query(
        "UPDATE usuario SET nome = ?, email = ?, senha = PASSWORD(?) WHERE id = ?;",
        [dados.nome, dados.email, dados.senha, id]
    );

    return resultado;
};

const excluir = async (id) => {
    const [resultado] = await con.query(
        "DELETE FROM usuario WHERE id = ?;",
        [id]
    );

    return resultado;
};

const login = async ({email, senha}) => {
    const [resultado] = await con.query(
        "SELECT id, nome, email FROM usuario WHERE email = ? AND senha = PASSWORD(?);",
        [email, senha]
    );

    return resultado[0];
};

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir,
    login
};