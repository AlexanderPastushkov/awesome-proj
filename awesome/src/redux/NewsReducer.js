const SHOW_NEWS = "SHOW-NEWS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let initialState = {
  news: [],
  isFetching: true,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NEWS:
      return { ...state, news: action.news };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetchin };
    default:
      return state;
  }
};

export const showNews = (news) => {
  return {
    type: SHOW_NEWS,
    news: news,
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetchin: isFetching,
  };
};

export default newsReducer;
