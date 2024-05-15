const ObjetoClasse = require('./classe');
const Model = require('./model');

exports.salvarDados = async (req, res) => {
    try {
        const dados = req.body;
        const objeto = new ObjetoClasse(dados);
        

        const registroExistente = await Model.verificarExistencia(objeto.cpf);
        if (registroExistente) {
            return res.status(400).json({ message: 'Registro já existe no banco de dados.' });
        }

        await Model.inserirDados(objeto);
        res.status(201).json({ message: 'Dados salvos com sucesso.' });
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};
