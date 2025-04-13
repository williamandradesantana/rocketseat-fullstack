const user = {
  name: "William",
  email: "william@email.com",
  message: function () {
    // console.log(`Olá, ${user.name}`);
    console.log(`Olá, ${this.name}`);
  },
};

user.message();
