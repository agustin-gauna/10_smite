const ButtonCounter = ({ onClick, text, isButtonDisabled }) => {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 flex items-center justify-center bg-secondary rounded-sm  transition-all duration-300 ease-in-out ${
        isButtonDisabled
          ? "bg-secondary/65 cursor-not-allowed"
          : "hover:cursor-pointer hover:bg-secondary/65"
      }`}
      disabled={isButtonDisabled}
    >
      {text}
    </button>
  );
};

export default ButtonCounter;
