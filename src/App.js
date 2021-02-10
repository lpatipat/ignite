import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;

// npm install redux react-redux react-router-dom styled-components framer-motion redux-thunk axios
