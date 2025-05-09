class User {
  constructor(name = String, email = String) {
    this.name = name;
    this.email = email;
  }

  sendEmail(source, destiny) {
    console.log(`Email foi enviado por ${source} para ${destiny}`);
  }
}

const user = new User("William", "william@gmail.com");

user.sendEmail(user.email, "destiny@gmail.com");
