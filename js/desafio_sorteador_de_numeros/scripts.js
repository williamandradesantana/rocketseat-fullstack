const start = document.querySelector("#start");
const quantityNumbers = document.querySelector("#quantity_of_numbers");
const end = document.querySelector("#end");

const button = document.querySelector("button");

const form = document.querySelector("form");
const section = document.querySelector("form section");

acceptOnlyNumbersOnInput(start);
acceptOnlyNumbersOnInput(quantityNumbers);
acceptOnlyNumbersOnInput(end);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const createPrizeDraw = {
    start: Number(start.value),
    quantityNumbers: Number(quantityNumbers.value),
    end: Number(end.value),
  };

  formsClear();
  resultPrizeDraw(createPrizeDraw);
});

function resultPrizeDraw(newPrizeDraw) {
  try {
    if (
      isNaN(newPrizeDraw.start) ||
      isNaN(newPrizeDraw.end) ||
      isNaN(newPrizeDraw.quantityNumbers)
    ) {
      alert("Por favor, corrija algum dos campos, aceitamos apenas números.");
      return;
    }

    if (newPrizeDraw.start >= newPrizeDraw.end) {
      alert("O valor de início não pode ser maior que o de fim!");
      quantityNumbers.focus();
      return;
    } else if (newPrizeDraw.quantityNumbers <= 0) {
      alert("A quantidade de números precisa ser maior que zero.");
      return;
    }

    section.classList.remove("d-grid");
    section.classList.add("d-none");

    const numbers = makePrizeDraw(
      newPrizeDraw.start,
      newPrizeDraw.end,
      newPrizeDraw.quantityNumbers
    );

    const result = document.querySelector("#result");
    result.classList.remove("d-none");
    addClassList(result, "d-flex");
    addClassList(result, "flex-direction-column");
    addClassList(result, "text-align-center");

    const title = document.createElement("h3");
    title.textContent = "Resultado do sorteio";

    const drawnNumbers = document.createElement("p");
    drawnNumbers.innerHTML = `<p class="text-center">${numbers.join(
      " - "
    )}</p>`;

    result.appendChild(title);
    result.appendChild(drawnNumbers);

    // Atualizar botão para "Sortear novamente"
    button.innerHTML = `Sortear novamente <img src="assets/icons/refresh.svg" alt="refresh icon">`;
    button.classList.add(
      "d-flex",
      "align-items-center",
      "justify-content-center"
    );

    button.onclick = () => {
      result.innerHTML = "";
      result.classList.add("d-none");
      section.classList.remove("d-none");
      section.classList.add("d-grid");
      button.innerHTML = `Sortear <img
                    src="assets/icons/arrow-right.svg" alt="Arrow right icon">`;
      formsClear();
    };
  } catch (error) {
    alert("Não foi possível realizar o sorteio.");
    console.log(error);
  }
}

function makePrizeDraw(start = Number, end = Number, quantity = Number) {
  let result = [];
  let numbersAvailable = [];

  for (let i = start; i <= end; i++) {
    numbersAvailable.push(i);
  }

  if (quantity > numbersAvailable.length) {
    throw new Error(
      "Quantidade maior do que o intervalo permite sem repetição."
    );
  }

  for (let i = 0; i < quantity; i++) {
    let randomIndex = Math.floor(Math.random() * numbersAvailable.length);
    result.push(numbersAvailable[randomIndex]);
    numbersAvailable.splice(randomIndex, 1);
  }

  return result;
}

function acceptOnlyNumbersOnInput(input) {
  input.value.replace(/[^0-9]/g, "");
}

function addClassList(selector, cls) {
  selector.classList.add(cls);
}

const formsClear = () => {
  start.value = "";
  end.value = "";
  quantityNumbers.value = "";
};
