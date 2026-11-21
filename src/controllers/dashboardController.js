var dashboardModel = require("../models/dashboardModel");

function pegarResultadoLinha(req, res) {
        var idUsuario = req.params.idUsuario;

        if(idUsuario == undefined){
            return res.status(400).send("Seu user está indefinido!");
        }else{

            dashboardModel.pegarResultadoLinha(idUsuario)
                .then(r => res.status(200).json(r))
                .catch(e => res.status(500)
                .json(e.sqlMessage));
        }

};

function pegarResultadoDonut(req, res) {
        var idUsuario = req.params.idUsuario;

        if(idUsuario == undefined){
            return res.status(400).send("Seu user está indefinido!");
        }else{

            dashboardModel.pegarResultadoDonut(idUsuario)
                .then(r => res.status(200).json(r))
                .catch(e => res.status(500)
                .json(e.sqlMessage));
        }

}



module.exports = {
    pegarResultadoLinha,
    pegarResultadoDonut
}