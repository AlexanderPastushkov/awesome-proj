const SHOW_TEAM = "SHOW_TEAM";

let initialState = {
  teams: [],
};

const bestSellReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TEAM:
      return {
        ...state,
        teams: action.teams,
      };

    default:
      return state;
  }
};
export const setTeamsAC = (teams) => {
  return {
    type: SHOW_TEAM,
    teams,
  };
};

export default bestSellReducer;
