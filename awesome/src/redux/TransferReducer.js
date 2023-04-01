const SHOW_TRANSFERS = "SHOW_TRANSFERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  transfers: [],
  isFetching: true,
};

const transfersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TRANSFERS:
      return {
        ...state,
        transfers: action.transfers,
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
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  };
};
export const showTransfers = (transfers) => {
  return {
    type: SHOW_TRANSFERS,
    transfers,
  };
};
export default transfersReducer;
