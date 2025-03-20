import ButtonCounter from "./ButtonCounter";

const Counter = ({
  counter,
  handleCounterSum,
  handleCounterRest,
  isButtonDisabled,
}) => {
  return (
    <div className="flex gap-2 text-white">
      <ButtonCounter
        onClick={handleCounterRest}
        text="+"
        isButtonDisabled={isButtonDisabled}
      />

      <span
        className={`h-10 w-10 flex items-center justify-center bg-secondary rounded-sm ${
          isButtonDisabled ? "bg-secondary/65" : ""
        }`}
      >
        {counter}
      </span>
      <ButtonCounter
        onClick={handleCounterSum}
        text="+"
        isButtonDisabled={isButtonDisabled}
      />
    </div>
  );
};

export default Counter;
