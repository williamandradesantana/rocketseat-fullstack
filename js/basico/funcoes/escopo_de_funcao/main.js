showMessage("Olá");

function showMessage(message) {
  console.log(message);
  endLine();

  function endLine() {
    console.log("----------------");
  }

  endLine();
}

showMessage("Tudo bem!");

// Não existe nesse escopo
// endLine();
