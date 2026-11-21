var resultQuizModel = require("../models/resultQuizModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertos;
    var erros = req.body.erros;
    var fk_usuario = req.body.fk_usuario;
    
    // Faça as validações dos valores
    if (fk_usuario == undefined) {
       return res.status(400).send("Seu user está indefinido!");
    } else if(acertos == undefined) {
       return res.status(400).send("O total de acertos está indefinido!");
    } else if (erros == undefined) {
       return res.status(400).send("O total de erros está indefinido!");
    }

    // Passe os valores como parâmetro e vá para o arquivo resultQuizModel.js
    resultQuizModel.cadastrar(acertos, erros, fk_usuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao enviar para o banco de dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    cadastrar
}