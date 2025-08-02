/**
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */

function useState<T extends number | string = string>() { // Caso não seja informado, o padrão será string.
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

let newState = useState<number>();
newState.get();
newState.set(1);
console.log(newState.get());
// newState.set("s");
console.log(newState.get());
