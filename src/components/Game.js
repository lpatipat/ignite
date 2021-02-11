import React from "react";
//Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailActions";
//Routing
import { Link } from "react-router-dom";

const Game = ({ name, released, id, image }) => {
  //load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <Link to={`/game/${id}`}>
      <StyledGame onClick={loadDetailHandler}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </StyledGame>
    </Link>
  );
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    padding-bottom: 2rem;
  }
`;

export default Game;
