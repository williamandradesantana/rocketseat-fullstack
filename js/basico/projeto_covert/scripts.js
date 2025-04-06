// Cotações da moeda no dia
const USD = 5.7346;
const EUR = 6.3407;
const GBP = 7.461;

// Obtendo elementos
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amount somente para obter números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando evento de submit(enviar) o formulário
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calcula o total.
    let total = amount * price;

    // Verifica se o resultado não é um número.
    if (isNaN(total)) {
      return alert("Por favor, digite valor corretamente para converter");
    }

    // Formatar o valor total.
    total = formatCurrencyBRL(total).replace("R$", "");

    // Exibe o resultado total.
    result.textContent = `${total} Reais`;

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result");

    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}

/**
 * @param {*} value
 * @returns Converte o valor formatado para real brasileiro
 */
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

/* 
Utilizar depois
let usd;
let eur;
let gbp;
let brl;

fetch("https://api.frankfurter.dev/v1/latest?base=USD").then((response) =>
    response.json().then((data) => {
        brl = data.rates.BRL;
        console.log(brl);
    })
);
*/
