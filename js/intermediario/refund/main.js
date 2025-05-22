// Seleciona os elementos do formulário.
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

// Seleciona os elementos da lista.
const expenseList = document.querySelector("ul");
const expensesQuantity = document.querySelector("aside header p span");
const expensesTotal = document.querySelector("aside header h2");

// Captura o evento de input para formatar o valor.
amount.oninput = () => {
  // Obtém o valor atual do input e remove os caracteres não numéricos.
  let value = amount.value.replace(/\D/g, "");
  // Transformar o valor em centavos (exemplo: 150/100 = 1.5)
  value = Number(value) / 100;
  // Atualiza o valor do input.
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  // Formata o valor no padrão BRL (Real Brasileiro).
  value = value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  // Retorna o valor formatado.
  return value;
}

// Captura o evento de submit no formulário para obter os valores.
form.addEventListener("submit", (e) => {
  // Retira o reload do formulário ao submit.
  e.preventDefault();

  // Cria um objeto com os detalhes da despesa.
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };

  // Chama a função que irá adicionar o item na lista.
  expenseAdd(newExpense);
});

// Adiciona um novo item na lista
function expenseAdd(newExpense) {
  try {
    // Cria o elemento para adicionar na lista.
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    // Cria a info da despesa
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    // Nome da despesa
    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    // Nome da categoria
    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;

    // Valor da despesa
    const expenseAmount = document.createElement("span");
    expenseAmount.classList.add("expense-amount");
    expenseAmount.innerHTML = `<small>R$</small> ${newExpense.amount
      .toUpperCase()
      .replace("R$", "")}`;

    const removeIcon = document.createElement("img");
    removeIcon.classList.add("remove-icon");
    removeIcon.src = `img/remove.svg`;
    removeIcon.alt = `remove`;

    expenseInfo.append(expenseName, expenseCategory);

    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

    expenseList.appendChild(expenseItem);

    // Atualiza os totais.
    updateTotals();
    // Limpa o formulário.
    formClear();
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.");
    console.log(error);
  }
}

// Atualiza os totais.
function updateTotals() {
  try {
    // Recupera os itens (li) da lista (ul)
    let items = expenseList.children;

    // Atualiza a quantidade
    expensesQuantity.textContent =
      items.length === 1
        ? `${items.length} despesa`
        : `${items.length} despesas`;

    // Valor para incrementar o valor total.
    let total = 0;
    for (let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector(".expense-amount");

      // Removendo caracteres não numéricos
      let value = itemAmount.textContent
        .replace(/[^\d,]/g, "")
        .replace(",", ".");

      value = parseFloat(value);

      if (isNaN(value)) {
        return alert(
          "Não foi possível calcular o total. O valor não parece um número."
        );
      }

      total += Number(value);
    }

    const symbolBRL = document.createElement("small");
    symbolBRL.textContent = "R$";

    total = formatCurrencyBRL(total).toUpperCase().replace("R$", "");

    expensesTotal.innerHTML = "";
    expensesTotal.append(symbolBRL, total);
  } catch (error) {
    console.log(error);
    alert("Não foi possível atualizar os totais.");
  }
}

// Evento que captura o clique nos itens da lista.
expenseList.addEventListener("click", (event) => {
  // verifica se o elemento clicado é o ícone de remover
  if (event.target.classList.contains("remove-icon")) {
    // Obtém a li pai do elemento clidade.
    const item = event.target.closest(".expense");
    item.remove();
  }

  updateTotals();
});

function formClear() {
  expense.value = "";
  category.value = "";
  amount.value = "";

  expense.focus();
}
