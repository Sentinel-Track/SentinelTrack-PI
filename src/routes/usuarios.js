var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/empresaDados",function(req,res){
    usuarioController.empresaDados(req,res);
});

router.post("/empresaEndereco",function(req,res){
    usuarioController.empresaEndereco(req,res);
})

router.patch('/alterar', function (req, res) {
    usuarioController.alterar(req, res);
});
//patch - alterar - param: id 

module.exports = router;