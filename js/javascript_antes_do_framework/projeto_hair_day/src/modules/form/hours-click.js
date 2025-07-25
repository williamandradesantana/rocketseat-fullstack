export function hoursClick() {
  const hours = document.querySelectorAll(".hour-avaliable");
  hours.forEach((avaliable) => {
    avaliable.addEventListener("click", (selected) => {
      // Remove a classe hour-selected de todas as li não selecionadas.
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // Adiciona classe na li clicada.
      selected.target.classList.add("hour-selected");
    });
  });
}
