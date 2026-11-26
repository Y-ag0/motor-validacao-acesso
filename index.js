function validarSenha(senha){ 
    if(senha.length < 8 || senha == "12345678" || senha == "senha123"){ 
        return false;
} else {
    return true; 
}}
console.log(validarSenha("123"));       
console.log(validarSenha("12345678")); 
console.log(validarSenha("senha123"));  
console.log(validarSenha("yago2026")); 

function verificarDuplicidade(email, listaEmails){ //Aqui a função é pra verificar se o e-mail está na lista de e-mails onde email é uma string e a listaEmails um array
    let verificacao = listaEmails.indexOf(email); // aqui se cria uma variavel de verificação que vai receber a listaEmails e vai usar indexOf pra procurar os e-mails cadastrados
    if(verificacao != -1){ // Aqui vai verificar se a verificação é diferente de -1 
        return true //Se for vai me retornar verdadeiro
    } else {
        return false // Caso contrário me retorna falso
    }
}
let emailsCadastrados = ["yago@email.com", "admin@sistema.com"]; //Aqui se cria a variavel de emails que foram cadastrados

console.log(verificarDuplicidade("yago@email.com", emailsCadastrados)); 
console.log(verificarDuplicidade("novo@email.com", emailsCadastrados)); 
console.log(verificarDuplicidade("admin@sistema.com", emailsCadastrados)); 

function definirPermissao(cargo){
    switch (cargo){
        case "admin":
            return "Acesso total ao sistema";
        case "suporte":
            return "Acesso de leitura e atendimento";
        case "usuario":
            return "Acesso padrão";
        default:
            return "Acesso negado: Cargo inválido";
    }       
}

console.log(definirPermissao("admin"));     
console.log(definirPermissao("suporte"));   
console.log(definirPermissao("usuario"));   
console.log(definirPermissao("visitante")); 

function processarAcesso(email, senha, cargo, listaEmails){
    if(validarSenha(senha) == false){
        return "Erro: senha inválida"
    }
    if(verificarDuplicidade(email,listaEmails) == true){
        return "Erro: e-mail cadastrado"
    } else {
        return definirPermissao(cargo);
    }


}
console.log(processarAcesso("novo@email.com", "123", "admin", emailsCadastrados));        // esperado: Erro: Senha inválida
console.log(processarAcesso("yago@email.com", "yago2026", "admin", emailsCadastrados));   // esperado: Erro: E-mail já cadastrado
console.log(processarAcesso("novo@email.com", "yago2026", "visitante", emailsCadastrados)); // esperado: Acesso negado: Cargo inválido
console.log(processarAcesso("novo@email.com", "yago2026", "admin", emailsCadastrados));   // esperado: Acesso total ao sistema