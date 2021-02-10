const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GANES":
      return { ...state };
    default:
      return { ...state };
  }
};

export default gamesReducer;
