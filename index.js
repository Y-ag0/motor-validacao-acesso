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