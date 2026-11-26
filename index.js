
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