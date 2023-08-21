import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "./styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNo, setSelectedNo] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);

  const generateRandomNO = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNo) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNO(1, 7);

    setCurrentDice((prev) => randomNumber);

    if (selectedNo === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNo(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };



  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNo={selectedNo}
          setSelectedNo={setSelectedNo}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setRules(prev => !prev)}>{
          rules ? "Hide" : "Show"
          }Rules</Button>
      </div>

      {rules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding-top: 10px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 220px; */
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
`;
