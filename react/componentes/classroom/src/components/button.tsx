type Props = {
  name: string;
  age: number;
};

export function Button({ name, age }: Props) {
  return (
    <button>
      {name} - {age}
    </button>
  );
}
