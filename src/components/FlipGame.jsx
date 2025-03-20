import { useState, useEffect } from "react";
import FlipCard from "./FlipCard";
import Button from "../ui-react/Button";
import Advice from "../ui-react/Advice";

const FlipGame = ({ gods, challenges }) => {
  const [flippedGodId, setFlippedGodId] = useState(null);
  const [flippedChallengeId, setFlippedChallengeId] = useState(null);
  const [randomGods, setRandomGods] = useState([]);
  const [randomChallenge, setRandomChallenge] = useState([]);
  const [partyMode, setPartyMode] = useState(false);

  const handleGodClick = (index) => {
    if (flippedGodId === null) {
      setFlippedGodId(index);
    }
  };

  const handleChallengeClick = (index) => {
    if (flippedChallengeId === null) {
      setFlippedChallengeId(index);
    }
  };
  const handleReset = () => {
    setFlippedGodId(null);
    setFlippedChallengeId(null);

    setTimeout(() => {
      const newRandomGods = [...gods]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      setRandomGods(newRandomGods);

      const newRandomChallenge = [...challenges]
        .filter((challenge) => challenge.group === partyMode)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      setRandomChallenge(newRandomChallenge);
    }, 300);
  };

  const handlePartyMode = () => {
    setPartyMode(!partyMode);
    handleReset();
  };

  useEffect(() => {
    const randomGod = () => {
      const newRandomGods = [...gods]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      setRandomGods(newRandomGods);
    };

    const randomChallenge = () => {
      const newRandomChallenge = [...challenges]
        .filter((challenge) => challenge.group === partyMode)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      setRandomChallenge(newRandomChallenge);
    };

    randomGod();
    randomChallenge();
  }, [gods, challenges, partyMode]);

  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row gap-2 justify-between mb-4">
        <h2 className="text-primary text-2xl font-bold">Flip Game</h2>

        <div className="flex gap-2">
          <Button
            text={`Modo Party: ${partyMode ? "ON" : "OFF"}`}
            onClick={handlePartyMode}
          />
          <Button
            text={"Reset"}
            img={"/reset/restore.svg"}
            onClick={handleReset}
          />
        </div>
      </div>

      <div className="mb-10">
        <Advice
          text={
            "Gira las cartas para descubrir tu dios y tu desafío. ¡Activá el Modo Party para retos en grupo!"
          }
        />
      </div>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between pl-2 pr-2">
          {randomGods.map((god, index) => (
            <FlipCard
              key={index}
              isFlipped={flippedGodId === index}
              name={god.name}
              img={god.image}
              onClick={() => handleGodClick(index)}
              frontText={"Dioses"}
            />
          ))}
        </div>

        <div className="flex justify-between pl-2 pr-2">
          {randomChallenge.map((challenge, index) => (
            <FlipCard
              key={index}
              isFlipped={flippedChallengeId === index}
              name={challenge.challenge}
              onClick={() => handleChallengeClick(index)}
              frontText={"Retos"}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FlipGame;
