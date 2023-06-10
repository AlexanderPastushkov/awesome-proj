import { footballAPI } from "../api/api";

const ADD_COMMENT = "ADD_COMMENT";
const UPDATE_COMMENT_TEXT = "UPDATE_COMMENT_TEXT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SHOW_TABLE = "SHOW_TABLE";
const DECREMENT = "DECREMENT";
const INCREMENT = "INCREMENT";
const RESET = "RESET";

let initialState = {
  table: [],
  isFetching: true,
  usersData: [],
  usersComments: [],
  newCommentText: "",
  count: 0,
};

const practiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      let newComment = { id: 4, text: state.newCommentText };
      let newUser = { id: 4, name: "Dasha", birthplace: "Saint-P" };

      return {
        ...state,
        newCommentText: "",
        usersData: [...state.usersData, newUser],
        usersComments: [...state.usersComments, newComment],
      };
    case UPDATE_COMMENT_TEXT:
      return { ...state, newCommentText: action.entireComment };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SHOW_TABLE:
      return { ...state, table: action.teams };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default: // need this for default case
      return state;
  }
};
//========================================================================================================================================================
//create actions
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};
export const showTable = (teams) => {
  return {
    type: SHOW_TABLE,
    teams,
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const addComment = () => {
  return {
    type: ADD_COMMENT,
  };
};
export const updateCommentText = (text) => {
  return {
    type: UPDATE_COMMENT_TEXT,
    entireComment: text,
  };
};

//========================================================================================================================================================
// create thunk
export const getTable = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    footballAPI.getTeams("premierleague/table").then((data) => {
      console.log(data);
      dispatch(toggleIsFetching(false));
      dispatch(showTable(data));
    });
  };
};

//========================================================================================================================================================
export default practiceReducer;

// let rai = [1, 2, 3, 4];

// console.log(rai.slice(0, 2));
