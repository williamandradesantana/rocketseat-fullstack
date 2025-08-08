type Props = React.ComponentProps<"button"> & {
  name: string;
  age: number;
};

export function Button({ name, age, ...rest }: Props) {
  return (
    <button {...rest}>
      {name} - {age}
    </button>
  );
}
