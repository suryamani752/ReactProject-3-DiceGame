import React from "react";
import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
/* background-color: red; */
h1{
    font-size: 80px;
    line-height: 100px;
}
p{
    font-size: 20px;
    font-weight: 500px;
}
`;
