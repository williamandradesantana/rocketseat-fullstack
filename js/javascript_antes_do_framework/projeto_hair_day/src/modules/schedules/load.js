import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { scheduleShow } from "../schedules/show.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // Obtém a data do input.
  const date = selectedDate.value;

  // Busca na api os agendamentos.
  const dailySchedules = await scheduleFetchByDay({ date });
  console.log(dailySchedules);
  // Exibe os agendamentos.
  scheduleShow({ dailySchedules });
  // Renderiza horas disponíveis.
  hoursLoad({ date });
}
