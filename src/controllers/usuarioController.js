var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}
function usuarioDados(req, res){
    var id = req.body.idUsuario;
    usuarioModel.usuarioDados(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function apagarUsuario(req, res){
        var idUsuario = req.body.idUsuario;
        console.log(' controller da empresa')
        usuarioModel.apagarUsuario(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao buscar os dados da empresa! Erro: ",
                        erro.sqlMessage
                    );
    
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var empresaId = req.body.empresaServer;
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var cargo = req.body.cargoServer;
    var usuario = req.body.usuarioServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (cargo == undefined) {
        res.status(400).send("Sua cargo está undefined!");
    } else if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Seu senha está undefined!");
    } else if (empresaId == undefined) {
        res.status(400).send("Seu empresaId está undefined!");
    } else {

        usuarioModel.cadastrar(nome, sobrenome, cargo, usuario, senha, empresaId)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function alterar(req, res) {
    var id = req.body.id;
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var cargo = req.body.cargoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    console.log(req.body);
    console.log("sexo");
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (cargo == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.alterar(nome, sobrenome, cargo, email, senha, id)
            .then(
                function (resultado) {
                    console.log(resultado)
                    res.json(resultado);

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function empresaDados(req, res) {
    var empresaId = req.body.fkEmpresa;
    usuarioModel.empresaDados(empresaId)
        .then(
            function (resultado) {
                res.json(resultado[0]);
                console.log(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar os dados da empresa! Erro: ",
                    erro.sqlMessage
                );

                res.status(500).json(erro.sqlMessage);
            }
        );
}

function empresaEndereco(req, res) {
    var enderecoId = req.body.idEndereco;
    console.log(enderecoId + ' controller')
    usuarioModel.empresaEndereco(enderecoId)
        .then(
            function (resultado) {
                res.json(resultado[0]);
                console.log(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar os dados da empresa! Erro: ",
                    erro.sqlMessage
                );

                res.status(500).json(erro.sqlMessage);
            }
        );
}

function empresaEditar(req, res) {
    var empresaId = req.body.idEmpresa;
    var nomeEmpresa = req.body.nomeEmpresa;
    var cnpjEmpresa = req.body.cnpjEmpresa;
    var emailEmpresa = req.body.emailEmpresa;
    var telCel = req.body.telCel;
    var telFix = req.body.telFix;
    console.log(' controller da empresa')
    usuarioModel.empresaEditar(empresaId, nomeEmpresa, cnpjEmpresa, emailEmpresa, telCel, telFix)
        .then(
            function (resultado) {
                res.json(resultado);
                console.log(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar os dados da empresa! Erro: ",
                    erro.sqlMessage
                );

                res.status(500).json(erro.sqlMessage);
            }
        );

}

function alterarEnderecoEmpresa(req, res) {
    var enderecoId = req.body.idEndereco;
    var cep = req.body.cep;
    var logradouro = req.body.logradouro;
    var numero = req.body.numero;
    var bairro = req.body.bairro;
    var cidade = req.body.cidade;
    var UF = req.body.UF;
    var complemento = req.body.complemento;

    console.log(enderecoId + ' controller da empresa')
    usuarioModel.empresaEnderecoEditar(UF, bairro, cep, cidade, complemento, logradouro, numero, enderecoId)
        .then(
            function (resultado) {
                res.json(resultado);
                console.log(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar os dados da empresa! Erro: ",
                    erro.sqlMessage
                );

                res.status(500).json(erro.sqlMessage);
            }
        );

}

function funcionariosLista(req, res) {
    var empresaId = req.body.fkEmpresa;
    var vazio = empresaId == undefined;
    if (!vazio) {
        usuarioModel.funcionariosLista(empresaId)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao buscar os dados da empresa! Erro: ",
                        erro.sqlMessage
                    );

                    res.status(500).json(erro.sqlMessage);
                }
            );
    }else{
        res.status(400).send("Você não enviou nenhum id da empresa!");
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    alterar,
    empresaDados,
    empresaEndereco,
    empresaEditar,
    alterarEnderecoEmpresa,
    funcionariosLista,
    usuarioDados,
    apagarUsuario
}