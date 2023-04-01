const SET_NEWSPAPERS = "SET_NEWSPAPERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  newspapers: [],
  pageSize: 50,
  totalNewspapersCount: 0,
  currentPage: 1,
  isFetching: true,
};

const newspapersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWSPAPERS:
      return { ...state, newspapers: action.newspapers };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalNewspapersCount: action.totalNewspapersCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetchin };
    default:
      return state;
  }
};

export const setNewspapers = (newspapers) => {
  return {
    type: SET_NEWSPAPERS,
    newspapers,
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetchin: isFetching,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setTotalNewspapersCount = (totalNewspapersCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalNewspapersCount,
  };
};
export default newspapersReducer;
//========================================================================================================================================================
