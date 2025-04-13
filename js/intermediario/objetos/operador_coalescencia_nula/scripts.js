/*

    OPERADOR DE COALESCENCIA NULA (??)
    
    O operador lógico que retorna o seu operando do
    lado direito quando seu operador do lado 
    esquerdo é null ou undefined. Caso contrário,
    ele retorna o seu operando do lado esquerdo.
*/

let content = null;
console.log(content ?? "Conteúdo padrão");
content = "Olá, William";
console.log(content ?? "Conteúdo padrão");

const user = {
  name: "William",
  avatar: undefined,
};

console.log(user.avatar ?? "default.png");
user.avatar = "william.png";
console.log(user.avatar ?? "default.png");
