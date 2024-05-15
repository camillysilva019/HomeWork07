const pool = require('./database');

exports.verificarExistencia = async (cpf) => {
    const query = 'SELECT COUNT(*) AS count FROM tabela WHERE cpf = $1';
    const result = await pool.query(query, [cpf]);
    return result.rows[0].count > 0;
};

exports.inserirDados = async (objeto) => {
    const query = 'INSERT INTO tabela (nome, data_nasc, cpf, sexo, estado_civil, email, telefone) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const values = [objeto.nome, objeto.data_nasc, objeto.cpf, objeto.sexo, objeto.estado_civil, objeto.email, objeto.telefone];
    await pool.query(query, values);
};
