/*
    O strict mode (modo restrito): 
    ativando esse modo, os erros que 
    eram silenciosos passa a gerar exceções no JavaScript. 
*/
"use strict";

function showMessage() {
  let personName = "William";
  console.log("Olá ", personName);
}

showMessage();

class Student {
  get point() {
    return 7;
  }
}

// Tenta mudar uma propriedade de leitura.
let student = new Student();
// student.point = 10;

// Tentando deletar uma propriedade de um objeto que não posso deletar.
// delete window.document;

// Quando passamos parâmetros duplicados.
function sum(a = Number, a = Number, c = Number) {
  return a + a + c;
}

const result = sum(1, 3, 2); // 3 + 3 + 2 = 8
console.log(result);
