import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Montserrat:100,200,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap");
@import url('https://fonts.googleapis.com/css?family=Volkhov:400,700&display=swap');



h1 {
  font-family: "Volkhov";
}


body {
    text-align: center;
    font-family: "Montserrat";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
