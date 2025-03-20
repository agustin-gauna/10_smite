const Button = ({ onClick, text, currentDice, isButtonDisabled }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 bg-primary text-white rounded-sm font-bold flex gap-2 items-center ${
        isButtonDisabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:cursor-pointer hover:bg-primary/65 transition-all duration-300 ease-in-out"
      }`}
      disabled={isButtonDisabled}
    >
      {text}
      <img src={currentDice} alt="dice" className="w-6 h-6" />
    </button>
  );
};

export default Button;
