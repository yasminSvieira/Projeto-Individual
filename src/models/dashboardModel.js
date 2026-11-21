var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
async function pegarResultadoLinha(idUsuario) {
   // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    SELECT dataHora,
	acertos
    FROM tentativa
    WHERE fk_usuario = ${idUsuario}
    ORDER BY dataHora DESC
    LIMIT 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return await database.executar(instrucaoSql);
};
async function pegarResultadoDonut(idUsuario) {

    var instrucaoSql = `
    SELECT acertos,
        erros
    FROM tentativa
    WHERE fk_usuario = ${idUsuario}
    ORDER BY dataHora DESC
    LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return await database.executar(instrucaoSql);
};

module.exports = {
    pegarResultadoLinha,
    pegarResultadoDonut
};