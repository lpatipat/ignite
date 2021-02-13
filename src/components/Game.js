import React from "react";
//Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailActions";
//Routing
import { Link } from "react-router-dom";
//utils
import { smallImage } from "../util";
//animations
import { popUp } from "../animations";

const Game = ({ name, released, id, image, game }) => {
  let videoLink = "";
  const videoCheck = () => {
    if (game.clip != null) {
      videoLink = game.clip.clip;
    } else {
      videoLink =
        "https://media.rawg.io/media/stories-640/7f3/7f31f872e91d4219adb928a46504f945.mp4";
    }
    return videoLink;
  };
  videoCheck();
  console.log(videoLink);
  //make the two animation ID's match in datatype
  const stringPathId = id.toString();
  //load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <Link to={`/game/${id}`}>
      <StyledGame
        variants={popUp}
        initial="hidden"
        animate="show"
        layoutId={stringPathId}
        onClick={loadDetailHandler}
      >
        {/* <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        /> */}
        <motion.video
          poster={smallImage(image, 640)}
          onMouseOver={(event) => event.target.play(videoLink)}
          onMouseOut={(event) => event.target.load(videoLink)}
          muted="muted"
          preload="auto"
        >
          <source src={videoLink} />
        </motion.video>
        <motion.h3 llayoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
      </StyledGame>
    </Link>
  );
};
const StyledGame = styled(motion.div)`
  width: 100%;
  align-self: center;
  min-height: 30vh;
  height: 100%;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    padding-bottom: 0;
  }
  p {
    justify-self: end;
    align-self: end;
  }
  video {
    height: auto;
    width: 100%;
  }
  video[poster] {
    object-fit: cover;
  }
`;

export default Game;
