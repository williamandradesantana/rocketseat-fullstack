import dayjs from "dayjs";
import { openinHours } from "../../utils/openin-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  // Limpa a lista de horários
  hours.innerHTML = "";

  // Obtém a lista de todos os horários ocupados.
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const openin = openinHours.map((hour) => {
    // Recupera somente hora.
    const [scheduleHour, _] = hour.split(":");

    // Adiciona a hora na data e verifica se a hora está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const avaliable = !unavailableHours.includes(hour) && !isHourPast;
    return {
      hour,
      avaliable,
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
