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
                    sessionStorage.USUARIO = JSON.stringify(json);
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.SOBRENOME_USUARIO = json.sobrenome;
                    sessionStorage.CARGO_USUARIO = json.cargo;
                    sessionStorage.EMAIL_USUARIO = json.usuario;
                    sessionStorage.SENHA_USUARIO = json.senha;
                    sessionStorage.EMPRESA_USUARIO = json.fkEmpresa;
                });
                var empresaID = sessionStorage.EMPRESA_USUARIO;
                fetch("/usuarios/empresaDados", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fkEmpresa: empresaID,
                       
                    })
                }).then(function (resposta) {
                    console.log("ESTOU NO THEN DO que pega dados da empresa!")
        
                    if (resposta.ok) {
                        console.log(resposta);
        
                        resposta.json().then(json => {
                            console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMPRESA = JSON.stringify(json);
                            var empresaSession = sessionStorage.EMPRESA 
                            var dadosEmpresa = JSON.parse(empresaSession)
                            var end = (dadosEmpresa.fkEndereco)
                            console.log(dadosEmpresa.fkEndereco + ' ddddddd aqui a fk')
                            fetch("/usuarios/empresaEndereco", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    idEndereco: end,
                                   
                                })
                            }).then(function (resposta) {
                                console.log("ESTOU NO THEN DO que pega dados do endereco da empresa!")
                    
                                if (resposta.ok) {
                                    console.log(resposta);
                    
                                    resposta.json().then(json => {
                                        console.log(json);
                                        console.log(JSON.stringify(json));
                                        sessionStorage.ENDERECO = JSON.stringify(json);
                                        setTimeout(function () {
                                            finalizarAguardar();
                                            window.location = "./dashboard.html";
                                        }, 1000); // apenas para exibir o loading
                                    });    
                                } else {
                    
                                    console.log("Houve um erro ao tentar pegar os dados da empresa!");
                    
                                    resposta.text().then(texto => {
                                        console.log(texto);
                                        finalizarAguardar(texto);
                                    });
                                }         
                            }).catch(function (erro) {
                                console.log(erro);
                                alert(erro)
                            })
                        });
        
                    } else {
        
                        console.log("Houve um erro ao tentar pegar os dados da empresa!");
        
                        resposta.text().then(texto => {
                            console.log(texto);
                            finalizarAguardar(texto);
                        });
                    }
        
                }).catch(function (erro) {
                    console.log(erro);
                    alert(erro)
                })
            
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

       
    }else if(charMin){
    msgSenha.innerHTML = `A senha não tem o tamanho mínimo <br> (6 caracteres)`
    }else {
        msgSenha.innerHTML = `Senha incorreta`
    }
}

function sair() {
    sessionStorage.clear();
    window.location = "login.html";
}