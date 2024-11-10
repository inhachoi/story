type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "blue" | "gray";
};

const Button = ({ label, onClick, variant = "blue" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-white font-semibold ${
        variant === "blue" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500 hover:bg-gray-600"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
