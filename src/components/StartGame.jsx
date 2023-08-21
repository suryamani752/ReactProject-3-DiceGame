import React from "react";
import styled from "styled-components";
import { Button } from "./styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content{
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
  }
`;

// const Button = styled.button`
//   /* display: flex;
// flex-direction: column;
// justify-content: center; */
//   /* align-items: center; */
//   padding: 10px 18px;
//   color: white;
//   /* gap: 10px; */

//   min-width: 220px;
//   /* height: 44px; */
//   background: #000000;
//   border-radius: 5px;
//   border: none;
//   font-size: 16px;
//   border: 1px solid transparent;
//   transition: 0.5s background ease-in;
//   cursor: pointer;



//   &:hover{
//     background-color: white;
//     border: 1px solid black;
//     color: black;
//     transition: 0.3s background ease-in;
//   }
// `;
