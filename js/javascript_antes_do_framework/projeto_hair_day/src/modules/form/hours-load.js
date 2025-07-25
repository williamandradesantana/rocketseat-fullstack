import dayjs from "dayjs";
import { openinHours } from "../../utils/openin-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  // Limpa a lista de horários
  hours.innerHTML = "";
  const openin = openinHours.map((hour) => {
    // Recupera somente hora.
    const [scheduleHour, _] = hour.split(":");

    // Adiciona a hora na data e verifica se a hora está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      avaliable: isHourPast,
    };
  });

  // Renderizar os horários.

  openin.forEach(({ hour, avaliable }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(avaliable ? "hour-avaliable" : "hour-unavailable");
    li.textContent = hour;

    if (hour == "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour == "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour == "18:00") {
      hourHeaderAdd("Noite");
    }

    hours.append(li);
  });

  // Adiciona o evento de click nos horários disponíveis.
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;
  hours.append(header);
}
