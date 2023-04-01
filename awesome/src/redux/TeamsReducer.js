const SHOW_TEAM = "SHOW_TEAM";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  teams: [],
  isFetching: true,
};

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TEAM:
      return {
        ...state,
        teams: action.teams,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const setTeams = (teams) => {
  return {
    type: SHOW_TEAM,
    teams: teams,
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  };
};

export default teamsReducer;
