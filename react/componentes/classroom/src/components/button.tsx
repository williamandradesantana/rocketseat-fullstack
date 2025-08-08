type Props = {
  name: string;
  age: number;
  onClick?: () => void;
};

export function Button({ name, age, onClick: onclick }: Props) {
  return (
    <button onClick={onclick}>
      {name} - {age}
    </button>
  );
}
