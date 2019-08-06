import React from "react";
import styled from "styled-components";
import ReactPageScroller from "react-page-scroller";

const ImageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.color};
  z-index: 0;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.color};
  opacity: 0.1;
`;

const OverlayWrapper = styled.div`
  z-index: 10;
  width: 40vw;
  position: absolute;
  height: 90vh;
  padding: 30px;
`;

export default class Slide extends React.Component {
  state = {
    page: 1
  };

  onPageChange = number => {
    this.setState({ currentPage: number });
  };

  render() {
    return (
      <>
        <OverlayWrapper>
          <Overlay color={"yellow"} />
        </OverlayWrapper>
        <ReactPageScroller
          ref={c => (this._pageScroller = c)}
          pageOnChange={this.onPageChange}
        >
          <ImageWrapper color={"lavender"} />
          <ImageWrapper color={"lightblue"} />
          <ImageWrapper color={"lightpink"} />
          <ImageWrapper color={"lightyellow"} />
        </ReactPageScroller>
      </>
    );
  }
}
