import React from "react";
//Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;

// npm install redux react-redux react-router-dom styled-components framer-motion redux-thunk axios
