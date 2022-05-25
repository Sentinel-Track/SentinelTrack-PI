// sessão
function validarSessao() {
    // aguardar();

    var usuarioSession = sessionStorage.USUARIO;
    console.log(usuarioSession)
    var dadosUsuario = JSON.parse(usuarioSession)
    console.log(dadosUsuario.nome)
 
   
    
    var h1LoginUsuario = document.getElementById("h1_login_usuario");
    /* nomeUsuario.value = nome;
     sobrenomeUsuario.value = sobrenome;
     cargoUsuario.value = cargo;
     usuario.value = email;
     senhaUsuario.value = senha;*/

    if (dadosUsuario.usuario != null && dadosUsuario.nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = dadosUsuario.email;
        }
        b_usuario.innerHTML = 'Olá, '+dadosUsuario.nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}


function dadosUsuario() {
    var usuarioSession = sessionStorage.USUARIO;
    var dadosUsuario = JSON.parse(usuarioSession)
    
    if (dadosUsuario.cargo != "Administrador") {
        empresaA.style.display = "none";
        funcionarioA.style.display = 'none';
        document.getElementById('cargoUsuario').setAttribute('disabled', 'disabled');
    }
    var h1LoginUsuario = document.getElementById("h1_login_usuario");
    nomeUsuario.value = dadosUsuario.nome;
     sobrenomeUsuario.value = dadosUsuario.sobrenome;
     cargoUsuario.value = dadosUsuario.cargo;
     usuario.value = dadosUsuario.usuario;
    
    if (dadosUsuario.usuario != null && dadosUsuario.nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = dadosUsuario.email;
        }
        b_usuario.innerHTML = 'Olá, '+dadosUsuario.nome;

        // finalizarAguardar();
    } else {
        console.log(dadosUsuario + " não está logado")
       // window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function dadosEmpresa(){

    var usuarioSession = sessionStorage.USUARIO;
    var dadosUsuario = JSON.parse(usuarioSession)
    var empresaSession = sessionStorage.EMPRESA 
    var dadosEmpresa = JSON.parse(empresaSession)
    var enderecoSession = sessionStorage.ENDERECO
    var dadosEndereco = JSON.parse(enderecoSession)

    if (dadosUsuario.cargo != "Administrador") {
        empresaA.style.display = "none";
        funcionarioA.style.display = 'none';
        document.getElementById('cargoUsuario').setAttribute('disabled', 'disabled');
    }
    console.log(dadosUsuario.fkEmpresa)
    
    if (dadosUsuario.usuario != null && dadosUsuario.nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
      
        b_usuario.innerHTML = 'Olá, '+dadosUsuario.nome;

        // finalizarAguardar();
    } else {
        console.log(dadosUsuario + " não está logado")
       // window.location = "../login.html";
    }

    console.log(dadosEndereco[0])
    console.log(dadosEmpresa[0])
    nomeEmpresa.value = dadosEmpresa[0].nomeLocal;
    cnpjEmpresa.value = dadosEmpresa[0].cnpj;
    emailEmpresa.value = dadosEmpresa[0].email;
    telCel.value = dadosEmpresa[0].telefone_c;
    telFix.value = dadosEmpresa[0].telefone_f;   
    cep.value = dadosEndereco[0].cep;
    logradouro.value = dadosEndereco[0].logradouro;
    num.value = dadosEndereco[0].numero;
    complemento.value = dadosEndereco[0].complemento;
    bairro.value = dadosEndereco[0].bairro;
    cidade.value = dadosEndereco[0].cidade;
    uf.value = dadosEndereco[0].UF;
}