const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, popular: action.payload.popular };
    default:
      return { ...state };
  }
};

//ACTION

export default gamesReducer;
