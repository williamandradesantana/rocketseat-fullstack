const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const main = document.querySelector("main");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const divLeft = document.createElement("div");
  const divRight = document.createElement("div");
  const item = document.createElement("span");
  const li = document.createElement("li");

  const trashIcon = document.createElement("img");
  trashIcon.src = "assets/icons/trash.svg";
  let checkIcon = document.createElement("img");
  checkIcon.src = "assets/icons/checkbox.svg";

  item.textContent = `${input.value}`;

  divLeft.prepend(checkIcon);
  divLeft.appendChild(item);
  divRight.appendChild(trashIcon);

  li.appendChild(divLeft);
  li.appendChild(divRight);
  ul.appendChild(li);

  // clean input after submit
  input.value = "";

  trashIcon.onclick = () => {
    li.style.display = "none";
    const div = document.createElement("div");
    const divWithTextAndAlert = document.createElement("div");
    const divWithDeleteIcon = document.createElement("div");

    const spanItemRemoved = document.createElement("span");
    spanItemRemoved.textContent = `${li.textContent} foi removido da lista!`;
    const alertIcon = document.createElement("img");
    alertIcon.src = "assets/icons/alert.svg";

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "assets/icons/delete.svg";

    divWithTextAndAlert.appendChild(alertIcon);
    divWithTextAndAlert.appendChild(spanItemRemoved);
    divWithDeleteIcon.appendChild(deleteIcon);

    div.classList.add("itemRemoved");
    div.appendChild(divWithTextAndAlert);
    div.appendChild(divWithDeleteIcon);
    main.appendChild(div);

    deleteIcon.onclick = () => {
      div.style.display = "none";
    };
  };

  checkIcon.onclick = () => {
    let checkboxSelectednIcon = "assets/icons/checkbox-selected.svg";
    checkIcon.src = checkboxSelectednIcon;

    checkIcon.onclick = () => {
      checkIcon.src = "assets/icons/checkbox.svg";
    };
  };
});
