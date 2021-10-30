function verificaPalindromo1(string){
    if(!string) {
    return `String inexistente.`;
    }
    //.split('') -> separa todas as letras e converte em array
    //.reverse() -> junta os itens do arruay
    //.join() -> converte array em string
    return string.split('').reverse().join('') === string;
}

function verificaPalindromo2(string){
    if(!string) {
    return `String inexistente.`;
    }
    
    for (let i = 0; i < string.length -1; i++){
        if (string[i] === string[string.length - 1 - i]){
            return string;
        } 
    }
    return false;
}

function verificaPalindromo3(string){
    if(!string) {
    return `String inexistente.`;
    }
    let verificacao = "";
    for (let i = string.length -1; i >= 0; i--){
        verificacao = verificacao + string[i];
    }
    if(verificacao === string){
        return true;
    } else {
        return false;
    }    
}
console.log(verificaPalindromo2('natan'))