type Props = {
  text: string;
};

function Button({ text }: Props) {
  return (
    <button className="rounded-full py-2 px-4 bg-yellow-300 min-w-[120px] text-amber-900 transition duration-500 hover:bg-green-400">
      {text}
    </button>
  );
}

export default Button;
