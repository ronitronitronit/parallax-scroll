import React from "react";
import styled from "styled-components";
import ReactPageScroller from "react-page-scroller";
import Images from "./Images";
import TextBox from "./TextBox";

const direction = {
  UP: "UP",
  DOWN: "DOWN"
};

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

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    width: 80vw;
    height: 40vh;
  }
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
    currentColor: Images[0].color,
    currentTextColor: Images[0].text,
    showText: true
  };

  onPageChange = number => {
    this.setState(
      {
        page: number,
        showText: false
      },
      () => {
        setTimeout(() => {
          this.setState({
            showText: true,
            previousColor: this.state.currentColor,
            previousTextColor: this.state.currentTextColor,
            currentColor: Images[number - 1].color,
            currentTextColor: Images[number - 1].text
          });
        }, 500);
      }
    );
  };

  navigate = selectedDirection => {
    const { page } = this.state;
    this._pageScroller.goToPage(
      selectedDirection === direction.DOWN ? page : page - 2
    );
  };

  render() {
    const {
      page,
      currentColor,
      previousColor,
      currentTextColor,
      previousTextColor
    } = this.state;

    const currentImage = Images[page - 1];
    return (
      <>
        <FlexWrapper>
          <OverlayWrapper>
            {this.state.showText && (
              <TextBox
                title={currentImage.title}
                subtitle={currentImage.subtitle}
                description={currentImage.description}
                currentTextColor={currentTextColor}
                previousTextColor={previousTextColor}
              />
            )}
            <Overlay
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
                key={item}
                image={Images[Images.indexOf(item)].image}
              />
            ))}
          </ReactPageScroller>
          <NavigationArrowWrapper>
            <NavigationArrow onClick={() => this.navigate(direction.UP)}>
              ∧
            </NavigationArrow>
            <NavigationArrow onClick={() => this.navigate(direction.DOWN)}>
              ∨
            </NavigationArrow>
          </NavigationArrowWrapper>
        </FlexWrapper>
      </>
    );
  }
}
