// sessão
function validarSessao() {
    // aguardar();

    var usuarioSession = sessionStorage.USUARIO;
    console.log(usuarioSession)
    var dadosUsuario = JSON.parse(usuarioSession)
    console.log(dadosUsuario.nome)
    var nome = sessionStorage.NOME_USUARIO;
    var sobrenome = sessionStorage.SOBRENOME_USUARIO;
    var cargo = sessionStorage.CARGO_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var senha = sessionStorage.SENHA_USUARIO;
    var empresa = sessionStorage.EMPRESA_USUARIO;
    if (dadosUsuario.cargo != "Administrador") {
        empresaA.style.display = "none";
        funcionarioA.style.display = 'none'
    }
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
        funcionarioA.style.display = 'none'
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

