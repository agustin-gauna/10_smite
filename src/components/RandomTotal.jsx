import { useState, useEffect } from "react";
import ButtonRandomize from "../ui-react/ButtonRandomize";
import Counter from "../ui-react/Counter";
import CardRandom from "./CardRandom";
import Advice from "../ui-react/Advice";
const RandomTotal = ({ gods, roles, items }) => {
  const [counter, setCounter] = useState(1);
  const [currentDice, setCurrentDice] = useState("/dice/dice-6.svg");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [selectedGods, setSelectedGods] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [delays, setDelays] = useState([]);

  const handleCounterSum = () => {
    if (counter < 5) {
      setCounter(counter + 1);
    }
  };

  const handleCounterRest = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleRandomize = () => {
    setIsButtonDisabled(true);

    const tempGods = [...gods]
      .sort(() => Math.random() - 0.5)
      .slice(0, counter);
    const tempRoles = [...roles]
      .sort(() => Math.random() - 0.5)
      .slice(0, counter);

    const godsWithRoles = tempGods.map((god, index) => ({
      ...god,
      role: tempRoles[index] || "Sin rol",
    }));

    const randomItems = tempGods.map(() => getRandomItems(items, 6));

    const finalDice = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(`/dice/dice-${finalDice}.svg`);

    setTimeout(() => {
      setIsButtonDisabled(false);
      setSelectedGods(godsWithRoles);
      setSelectedItems(randomItems);

      const delaysArray = godsWithRoles.map((_, index) => index * 200);
      setDelays(delaysArray);
    }, 1000);
  };

  const getRandomItems = (items, numItems) => {
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);
    return shuffledItems.slice(0, numItems);
  };

  useEffect(() => {
    let interval;
    if (isButtonDisabled) {
      interval = setInterval(() => {
        const randomDice = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(`/dice/dice-${randomDice}.svg`);
      }, 300);
    }

    if (!isButtonDisabled && interval) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isButtonDisabled]);

  return (
    <div className="flex flex-col gap-4 mb-10">
      <div className="flex flex-col gap-4 md:flex-row justify-between">
        <h2 className="text-primary text-2xl font-bold">Random Total</h2>

        <div className="flex justify-between md:gap-4">
          <Counter
            counter={counter}
            handleCounterSum={handleCounterSum}
            handleCounterRest={handleCounterRest}
            isButtonDisabled={isButtonDisabled}
          />

          <ButtonRandomize
            onClick={handleRandomize}
            text="RANDOMIZE"
            currentDice={currentDice}
            isButtonDisabled={isButtonDisabled}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {selectedGods.length === 0 ? (
          <Advice
            text={`¡Haz click en "RANDOMIZE" para
              generar dioses, sus roles y builds al azar! Usa el contador para
              elegir cuántos dioses quieres randomizar.`}
          />
        ) : (
          selectedGods.map((god, index) => {
            const randomItems = selectedItems[index] || [];

            return (
              <CardRandom
                god={god}
                key={god.name}
                delay={delays[index]}
                items={randomItems}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default RandomTotal;
