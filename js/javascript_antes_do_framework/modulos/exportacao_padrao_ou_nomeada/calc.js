// default export - é a função padrão fornecida pelo módulo.
export default function sum(...rest) {
  let total = 0;
  for (let i = 0; i < rest.length; i++) total += rest[i];

  return total;
}

// named export - cada método é importado pelo seu próprio nome de exportação.
export function multiply(...rest) {
  let total = 1;
  for (let i = 0; i < rest.length; i++) total *= rest[i];

  return total;
}
