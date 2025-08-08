type Props = React.ComponentProps<"button"> & {
  name: string;
  age: number;
};

export function Button({ name, age, onClick }: Props) {
  return (
    <button onClick={onClick}>
      {name} - {age}
    </button>
  );
}
