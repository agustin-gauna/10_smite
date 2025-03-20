const Button = ({ onClick, text, img }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 bg-primary text-white rounded-sm font-bold flex gap-2 items-center hover:cursor-pointer hover:bg-primary/65 transition-all duration-300 ease-in-out `}
    >
      {text}

      {img && <img src={img} alt="dice" className="w-6 h-6" />}
    </button>
  );
};

export default Button;
