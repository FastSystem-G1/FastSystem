function Cadastrar(){
    var email = emailInput.value
    var senha = senhaInput.value

    if(email.length <= 3){
        console.log("Email inválido")
    } else if(!email.indexOf("@")){
        console.log("Erro")
        }{
        console.log("Login efetuado com sucesso!")
    }

}