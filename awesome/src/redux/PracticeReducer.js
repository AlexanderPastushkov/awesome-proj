const ADD_COMMENT = "ADD_COMMENT";
const UPDATE_COMMENT_TEXT = "UPDATE_COMMENT_TEXT";

let initialState = {
  usersData: [
    { id: 1, name: "Sanek", birthplace: "Zhlobin" },
    { id: 2, name: "Gorshok", birthplace: "Saint-P" },
    { id: 3, name: "Knyaz", birthplace: "Saint-P" },
  ],
  usersComments: [
    { id: 1, text: "Hello" },
    { id: 2, text: "Wats upp" },
    { id: 3, text: "Good bye" },
  ],
  newCommentText: "",
};

const practiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      let newComment = { id: 4, text: state.newCommentText };
      return {
        ...state,
        newCommentText: "",
        usersComments: [...state.usersComments, newComment],
      };
    case UPDATE_COMMENT_TEXT:
      return { ...state, newCommentText: action.entireComment };
    default: // need this for default case
      return state;
  }
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
export default practiceReducer;
