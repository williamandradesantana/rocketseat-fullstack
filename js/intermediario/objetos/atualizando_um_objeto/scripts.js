const product = {
  name: "Teclado",
  quantity: 100,
};

// Acessando uma propriedade do objeto.
console.log(product.name);
console.log(product.quantity);

// Atualizando uma propriedade do objeto
product.quantity = 90;
console.log(product.quantity);

console.log(product.name);
product.name = "Mouse";
console.log(product.name);

// Notação de colchetes
product["quantity"] = 50;
console.log(product);
