class Product {
  constructor(name = String) {
    this.name = name;
  }
}

const product1 = new Product("Keyboard");
console.log(product1);
console.log(product1.name);

const product2 = new Product("Mouse");
console.log(product2);
console.log(product2.name);
