import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  width: 40vw;
  height: 100vh;
  background: rgba(10, 10, 10, 0.5);
  z-index: 10;
  position: absolute;
`;

const ImageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: salmon;
  z-index: 9;
  position: relative;
`;

const ContentWrapper = styled.div``;

class Slide extends React.Component {
  render() {
    return (
      <ContentWrapper>
        <Overlay>Overlay here</Overlay>
        <ImageWrapper>Image here</ImageWrapper>
      </ContentWrapper>
    );
  }
}

export default Slide;
