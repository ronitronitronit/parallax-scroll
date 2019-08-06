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

const Title = styled.h1`
  font-family: "Volkhov";
  -webkit-animation: dropin 1.1s both;
  animation: ${dropin} 1.1s both;
  margin: 0;
`;

const Subtitle = styled.h1`
  margin: 4px 0 6px 0;
  color: ${props => props.color};
  font-family: "Volkhov";
  -webkit-animation: dropin 1.1s both;
  animation: ${dropin} 1.25s both;
`;

const Description = styled.p`
  height: 100px;
  -webkit-animation: dropin 1.1s both;
  animation: ${dropin} 1.4s both;
  font-size: 13px;
  margin: 0;
`;

const TextBox = props => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Subtitle color={props.currentTextColor}>{props.subtitle}</Subtitle>
      <Description>{props.description}</Description>
    </Wrapper>
  );
};

export default TextBox;
