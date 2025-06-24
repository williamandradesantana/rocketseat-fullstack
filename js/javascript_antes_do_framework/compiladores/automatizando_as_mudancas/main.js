class User {
  constructor({ email }) {
    this.email = email;
  }

  sendMessage() {
    console.log(`Mensagem enviada `);
  }
}

let user = new User({ email: "william@gmail.com" });
user.sendMessage();
