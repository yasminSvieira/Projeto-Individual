var express = require("express");
var router = express.Router();

var resultQuizController = require("../controllers/resultQuizController");

//Recebendo os dados do html e direcionando para a função que joga para o BD no resultQuizController
router.post("/cadastrar", function (req, res) {
    resultQuizController.cadastrar(req, res);
})

module.exports = router;