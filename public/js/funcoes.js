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
    console.log(dadosUsuario.nome)
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
    console.log(dadosEmpresa)
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

    console.log(dadosEndereco)
    console.log(dadosEmpresa)
    nomeEmpresa.value = dadosEmpresa.nomeLocal;
    cnpjEmpresa.value = dadosEmpresa.cnpj;
    emailEmpresa.value = dadosEmpresa.email;
    telCel.value = dadosEmpresa.telefone_c;
    telFix.value = dadosEmpresa.telefone_f;   
    cep.value = dadosEndereco.cep;
    logradouro.value = dadosEndereco.logradouro;
    num.value = dadosEndereco.numero;
    complemento.value = dadosEndereco.complemento;
    bairro.value = dadosEndereco.bairro;
    cidade.value = dadosEndereco.cidade;
    uf.value = dadosEndereco.UF;
}

function obterDadosUltimaHora(idSensor){
    
}

function chamar() {
    chartmg.style.display = "none";
    chamado.style.display = "flex";
    grafico.style.display = "none";

    btnHora.style.borderBottom = "none";
    btnHora.style.fontWeight = "normal";
    btnHora.style.backgroundColor = "transparent";

    btnDiario.style.borderBottom = "none";
    btnDiario.style.fontWeight = "normal";
    btnDiario.style.backgroundColor = "transparent";

    btnSemanal.style.borderBottom = "none";
    btnSemanal.style.fontWeight = "normal";
    btnSemanal.style.backgroundColor = "transparent";

    btnMensal.style.borderBottom = "none";
    btnMensal.style.fontWeight = "normal";
    btnMensal.style.backgroundColor = "transparent";

    btnAnual.style.borderBottom = "none";
    btnAnual.style.fontWeight = "normal";
    btnAnual.style.backgroundColor = "transparent";

    btnChamado.style.borderBottom = "solid 3px #D71B22";
    btnChamado.style.fontWeight = "bold";
    btnChamado.style.backgroundColor = "#023f79";
}