import React from "react";
//Components and Pages
import Nav from "./components/Nav";
import Home from "./pages/Home";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Routing
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;

// npm install redux react-redux react-router-dom styled-components framer-motion redux-thunk axios
