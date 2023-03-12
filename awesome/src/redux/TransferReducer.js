const SHOW_TRANSFERS = "SHOW_TRANSFERS";

let initialState = {
  transfers: [],
};

const transfersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TRANSFERS:
      return {
        ...state,
        transfers: action.transfers,
      };
    default:
      return state;
  }
};

export const showTransfersAC = (transfers) => {
  return {
    type: SHOW_TRANSFERS,
    transfers,
  };
};
export default transfersReducer;
