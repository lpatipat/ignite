import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
//Styiling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animations";
// Routing
import { useLocation } from "react-router-dom";

const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(location.pathname);
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get that Data Back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched &&
                searched.map((game) => (
                  <Game
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    key={game.id}
                    image={game.background_image}
                  />
                ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming &&
            upcoming.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                key={game.id}
                image={game.background_image}
              />
            ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular &&
            popular.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                key={game.id}
                image={game.background_image}
              />
            ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames &&
            newGames.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                key={game.id}
                image={game.background_image}
              />
            ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
