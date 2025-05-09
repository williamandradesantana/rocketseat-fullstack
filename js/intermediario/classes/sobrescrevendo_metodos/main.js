class Animal {
  constructor(name = String) {
    this.name = name;
  }
  makeNoise() {
    console.log(`Algum som genérico do animal`);
  }
}

class Dog extends Animal {
  makeNoise() {
    console.log("Au Au!");
  }
}

const dog = new Dog("Thresh");
console.log(dog.name);
dog.makeNoise();

class Cat extends Animal {
  makeNoise() {
    console.log("Miau Miau");
  }

  run() {
    console.log("Correndo...!");
  }
}

const cat = new Cat("Kayle");
console.log(cat.name);
cat.makeNoise();
cat.run();
