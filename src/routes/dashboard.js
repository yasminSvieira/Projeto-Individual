var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/pegarResultadoLinha/:idUsuario", function 
   (req, res) {
   dashboardController
   .pegarResultadoLinha(req, res);
});

router.get("/pegarResultadoDonut/:idUsuario", function 
   (req, res) {
   dashboardController
   .pegarResultadoDonut(req, res);
});

module.exports = router;