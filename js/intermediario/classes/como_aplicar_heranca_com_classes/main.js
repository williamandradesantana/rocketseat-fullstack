class Animal {
  constructor(name = String) {
    this.name = name;
  }
  makeNoise() {
    console.log(`Algum som genérico do animal`);
  }
}

class Dog extends Animal {
  // Não tem nada aqui.
}

const dog = new Dog("Thresh");
console.log(dog.name);
dog.makeNoise();

class Cat extends Animal {
  // Não tem nada aqui.
}

const cat = new Cat("Kayle");
console.log(cat.name);
cat.makeNoise();
