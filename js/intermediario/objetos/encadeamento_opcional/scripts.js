/*

    OPTIONAL CHAINING (?.) - encadeamento opcional
    Se a propriedade ou função chamada é nullish
    (null or undefined), a expressão retorna
    undefined em vez de gerar um erro.

    Útil ao explorar o conteúdo de um objeto
    quando não existe garantia da existência 
    de determinadas propriedades obrigatórias.

*/

const user = {
  id: 1,
  name: "William",
  //   address: {
  //     street: "Avenida Brasil",
  //     city: "Aracaju",
  //     geo: {
  //       latitude: 10.9265,
  //       longitude: 37.0731,
  //     },
  //   },
  message: function () {
    console.log(`Olá, ${this.name}`);
  },
};

console.log(user);
console.log(user.name);
console.log(user?.address?.street);
console.log(user?.address);
user.message?.();
