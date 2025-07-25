import { apiConfig } from "./api-config.js";
import dayjs from "dayjs";

export async function scheduleFetchByDay({ date }) {
  try {
    // Fazendo a requisição obter dados.
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Converte para JSON
    const data = await response.json();
    console.log(data);

    // Filtra os agendamentos pelo dia selecionados.
    const dailySchedules = data.filter((schedule) =>
      dayjs(schedule.when).isSame(schedule.when, "day")
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado!");
  }
}
