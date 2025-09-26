function Button({ text, onClick, color = "indigo" }) {
  const base =
    "w-full py-3 rounded-lg font-semibold shadow transition duration-200";
  const styles = {
    indigo: "bg-indigo-600 text-white hover:bg-indigo-700",
    red: "bg-red-500 text-white hover:bg-red-600",
    white: "bg-white text-indigo-600 hover:bg-gray-200",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[color]}`}>
      {text}
    </button>
  );
}

export default Button;
