export class Calc {
  sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) total += rest[i];

    return total;
  }

  multiply(...rest) {
    let total = 1;
    for (let i = 0; i < rest.length; i++) total *= rest[i];

    return total;
  }
}
export default Calc;
