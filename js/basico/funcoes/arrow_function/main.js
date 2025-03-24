// Arrow function (função seta)

const showMessage1 = () => {
  console.log("Olá");
};

console.log(showMessage1);
showMessage1();

const showMessage2 = (username, email) => {
  console.log(`Olá, ${username} seu email é: ${email}`);
};

showMessage2("Rodrigo", "rdr@gmail.com");
