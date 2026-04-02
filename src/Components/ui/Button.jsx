

export default function Button({ text, type = "button", variant = "primary", onClick }) {
  const baseStyles =
    "px-5 cursor-pointer py-2.5 rounded-lg font-medium transition-all duration-200 focus:outline-none";

  const variants = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg",
    secondary:
      "border border-emerald-600 text-emerald-600 hover:bg-emerald-50",
    dark:
      "bg-gray-900 text-white hover:bg-gray-800 border border-gray-700",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

