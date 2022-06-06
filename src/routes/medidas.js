var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimasHora/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasHora(req, res);
});

router.get("/dadosMapaCalor/:idEmpresa", function (req, res) {
    medidaController.dadosMapaCalor(req, res);
})

router.get("/ultimosAnos/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasAnos(req, res);
});

router.get("/ultimasDia/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasDia(req, res);
});

router.get("/tempo-real/:idEmpresa", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/semanasMes/:idEmpresa", function (req, res) {
    medidaController.semanasMes(req, res);
})

router.get("/mesAno/:idEmpresa", function (req, res) {
    medidaController.mesAno(req, res);
});

router.get("/kpiMes/:idEmpresa", function (req, res) {
    medidaController.buscarKpiMes(req, res);
})

router.get("/kpiSem/:idEmpresa", function (req, res) {
    medidaController.buscarKpiSem(req, res);
})

router.get("/kpiDia/:idEmpresa", function (req, res) {
    medidaController.buscarKpiDia(req, res);
})

router.get("/kpiMesComparar/:idEmpresa", function (req, res) {
    medidaController.buscarKpiMesComparar(req, res);
})



module.exports = router;