import React from "react";
//Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;

// npm install redux react-redux react-router-dom styled-components framer-motion redux-thunk axios
