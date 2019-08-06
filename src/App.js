import React from "react";
import Slide from "./components/Slide";
import GlobalStyle from "./theme/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Slide />
      </div>
    </>
  );
}

export default App;
