import React from "react";
import styled, { keyframes } from "styled-components";

const dropin = keyframes`
  0% {
    -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  78% {
    -webkit-transform: translateY(2);
            transform: translateY(4);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`;

const Title = styled.h1`
  font-family: "Volkhov";
  -webkit-animation: dropin 1.1s both;
  animation: ${dropin} 1.1s both;
  margin: 0;
`;

const Subtitle = styled.h1`
  font-family: "Volkhov";
  -webkit-animation: dropin 1.1s both;
  animation: ${dropin} 1.25s both;
  color: black;
  margin: 4px 0 6px 0;
`;

const Description = styled.p`
  height: 100px;
  -webkit-animation: dropin 1.1s both;
  animation: ${dropin} 1.4s both;
  font-size: 12px;
  margin: 0;
`;

const Wrapper = styled.div`
  position: fixed;
  color: white;
  z-index: 1000;
  align-items: flex-end;
  padding-right: 40px;
  padding-bottom: 80px;
  width: 250px;
  text-align: left;
`;
const TextBox = props => {
  return (
    <Wrapper>
      <Title>This is the Title</Title>
      <Subtitle>This is the subtitle</Subtitle>
      <Description>
        Hard working... Alpha male... Jackhammer... Merciless... Insatiable…
        Before I do anything, I ask myself... "Would an idiot do that?" And if
        the answer is yes, I do not do that thing.
      </Description>
    </Wrapper>
  );
};

export default TextBox;
