import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ error, setError, selectedNo, setSelectedNo }) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNo(value);
    setError("");
  };

  //   console.log(selectedNo);

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, index) => (
          <Box
            isSelected={value === selectedNo}
            onClick={() => numberSelectorHandler(value)}
            key={index}
          >
            {value}
          </Box>
        ))}

        {/* <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box> */}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 65px;
  width: 75px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  /* color: ${(props) => (props.isSelected ? "white" : "black")}; */
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;
