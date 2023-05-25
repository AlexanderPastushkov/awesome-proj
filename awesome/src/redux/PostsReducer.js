import { jsonPlaceHolderAPI } from "../api/api";

const SET_POSTS = "SET_POSTS";

let initialState = {
  post: "lol",
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, post: action.post };
    default:
      return state;
  }
};
export const setPosts = (post) => {
  return {
    type: SET_POSTS,
    post,
  };
};

export const getPosts = () => {
  return (dispatch) => {
    jsonPlaceHolderAPI.getPosts().then((data) => {
      dispatch(setPosts(data));
    });
  };
};
export default postsReducer;
