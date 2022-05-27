var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM tbUsuario WHERE usuario = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, sobrenome, cargo, usuario, senha, fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, cpf);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO tbUsuario (nome, sobrenome, cargo , usuario, senha, fkEmpresa) VALUES ('${nome}', '${sobrenome}', '${cargo}', '${usuario}', '${senha}','${fkEmpresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterar(nome, sobrenome, cargo, email, senha, id) {
    //todo - cripto senha
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterar():", nome, sobrenome, cargo, email, senha);
    var instrucao = `
        UPDATE tbUsuario SET nome = '${nome}', sobrenome = '${sobrenome}', cargo = '${cargo}', usuario = '${email}', senha = '${senha}' WHERE idUsuario = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function empresaDados(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.")
    var instrucao = `
        SELECT * FROM tbEmpresa WHERE idEmpresa = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function empresaEndereco(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.")
    var instrucao = `
        SELECT * FROM tbEndereco WHERE idEndereco = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function empresaEditar(empresaId, nomeEmpresa, cnpjEmpresa, emailEmpresa, telCel, telFix) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterar():", empresaId, nomeEmpresa, cnpjEmpresa, emailEmpresa, telCel, telFix);
    var instrucao = `UPDATE tbEmpresa SET nomeLocal = '${nomeEmpresa}', cnpj = '${cnpjEmpresa}', email = '${emailEmpresa}', telefone_c = '${telCel}', telefone_f = '${telFix}' WHERE idEmpresa = ${empresaId};
     `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function empresaEnderecoEditar(uf, bairro, cep, cidade, complemento,logradouro,numero, enderecoId){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterar():", empresaId, nomeEmpresa, cnpjEmpresa, emailEmpresa, telCel, telFix);
    var instrucao = `UPDATE tbEndereco SET UF = '${uf}', bairro = '${bairro}', cep = '${cep}', cidade = '${cidade}', complemento = '${complemento}', logradouro = '${logradouro}', numero = '${numero}' WHERE idEndereco = ${enderecoId};
     `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    alterar,
    empresaDados,
    empresaEndereco,
    empresaEditar,
    empresaEnderecoEditar
};