function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}
function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}
function entrar() {
    aguardar();
    var senhaVar = ipt_senha.value;
    var charMin = senhaVar.length < 6;
    var emailVar = ipt_email.value;
  
    if(!charMin && emailValido){
        
        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.SOBRENOME_USUARIO = json.sobrenome;
                    sessionStorage.CARGO_USUARIO = json.cargo;
                    sessionStorage.EMAIL_USUARIO = json.usuario;
                    sessionStorage.SENHA_USUARIO = json.senha;
                    sessionStorage.EMPRESA_USUARIO = json.fkEmpresa;
                    setTimeout(function () {
                        finalizarAguardar();
                        window.location = "./dashboard.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;       
        
        alert('Login realizado com Sucesso!')
        window.location = './dashboard.html'
    
    
    }else if(charMin){
    msgSenha.innerHTML = `A senha não tem o tamanho mínimo <br> (6 caracteres)`
    }else {
        msgSenha.innerHTML = `Senha incorreta`
    }
}

function validarSessao() {
    aguardar();

    var login = sessionStorage.LOGIN_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var cargo = sessionStorage.CARGO_USUARIO;
    var h1Titulo = document.getElementById("h1_titulo");
    
    
    if (login != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        h1Titulo.innerHTML = `${login}`;

        finalizarAguardar();
    } else {
        window.location = "login.html";
    }
}

function sair() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "login.html";
}