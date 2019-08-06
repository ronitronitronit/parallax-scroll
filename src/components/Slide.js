import React from "react";
import styled from "styled-components";
import ReactPageScroller from "react-page-scroller";
import Images from "./Images";
import TextBox from "./TextBox";

const ImageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: 0;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  transition-duration: 15s;
  transition-property: transform;
  &:hover,
  &:active {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.9;
  background: ${props => props.currentColor};
  transition: background-color 0.5s ease;
`;

const OverlayWrapper = styled.div`
  z-index: 10;
  width: 40vw;
  position: fixed;
  height: 90vh;
  padding: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const FlexWrapper = styled.div`
  display: flex;
`;
const NavigationArrowWrapper = styled.div`
  bottom: 140px;
  right: 50px;
  position: fixed;
  z-index: 100;
`;
const NavigationArrow = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 50%;
  background: white;
  font-size: 40px;
  line-height: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export default class Slide extends React.Component {
  state = {
    page: 1,
    currentColor: Images[0].color
  };

  onPageChange = number => {
    this.setState(
      {
        currentPage: number
      },
      () => {
        setTimeout(() => {
          this.setState({
            previousColor: this.state.currentColor,
            currentColor: Images[number - 1].color
          });
        }, 500);
      }
    );
  };

  overlay = React.createRef();
  page1 = React.createRef();
  page2 = React.createRef();
  page3 = React.createRef();
  page4 = React.createRef();

  render() {
    const { currentColor, previousColor } = this.state;
    return (
      <>
        <FlexWrapper>
          <OverlayWrapper>
            <TextBox />
            <Overlay
              ref={this.overlay}
              currentColor={currentColor}
              previousColor={previousColor}
            />
          </OverlayWrapper>
          <ReactPageScroller
            ref={c => (this._pageScroller = c)}
            pageOnChange={this.onPageChange}
          >
            {Images.map(item => (
              <ImageWrapper
                ref={this[`page${Images.indexOf(item)}`]}
                image={Images[Images.indexOf(item)].image}
              />
            ))}
          </ReactPageScroller>
          <NavigationArrowWrapper>
            <NavigationArrow>∧</NavigationArrow>
            <NavigationArrow>∨</NavigationArrow>
          </NavigationArrowWrapper>
        </FlexWrapper>
      </>
    );
  }
}
