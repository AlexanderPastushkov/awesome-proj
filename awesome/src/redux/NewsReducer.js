const SHOW_NEWS = "SHOW-NEWS";

let initialState = {
  news: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NEWS:
      return { ...state, news: action.news };
    default:
      return state;
  }
};

export const showNewsAC = (news) => {
  return {
    type: SHOW_NEWS,
    news: news,
  };
};

export default newsReducer;
