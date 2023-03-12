const SET_NEWSPAPERS = "SET_NEWSPAPERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let initialState = {
  newspapers: [],
  pageSize: 50,
  totalNewspapersCount: 0,
  currentPage: 1,
};

const newspapersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWSPAPERS:
      return { ...state, newspapers: action.newspapers };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalNewspapersCount: action.totalNewspapersCount };
    default:
      return state;
  }
};

export const setNewspapersAC = (newspapers) => {
  return {
    type: SET_NEWSPAPERS,
    newspapers,
  };
};
export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setTotalNewspapersCountAC = (totalNewspapersCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalNewspapersCount,
  };
};
export default newspapersReducer;
