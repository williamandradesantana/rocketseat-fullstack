import dayjs from "dayjs";

import { scheduleNew } from "./../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");

// Data atual para input
const inputToDay = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega data atual e define data mínima.
const selectedDate = document.getElementById("date");
selectedDate.value = inputToDay;
selectedDate.min = inputToDay;

form.onsubmit = async (event) => {
  // Previne o comportamento padrão de carregar a página.
  event.preventDefault();

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Informe ou selecione a hora!");
    }

    // Recupera somente a hora.
    const [hour] = hourSelected.innerText.split(":");

    // Insere hora e data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gera ID.
    const id = new Date().getTime().toString();

    await scheduleNew({ id: id, name: name, when: when });

    // Recarrega os agendamentos.
    await schedulesDay();

    // Limpa o input de nome do cliente.
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
