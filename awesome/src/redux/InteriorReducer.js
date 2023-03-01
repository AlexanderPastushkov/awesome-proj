const SHOW_CHAIR = "SHOW-CHAIR";
const UPDATE_NEW_CHAIR_TEXT = "UPDATE-NEW-CHAIR-TEXT";

let initialState = {
  interiorData: [
    { id: 1, furniture: "chair" },
    { id: 2, furniture: "chair" },
    { id: 3, furniture: "chair" },
    { id: 4, furniture: "chair" },
    { id: 5, furniture: "chair" },
    { id: 6, furniture: "chair" },
    { id: 7, furniture: "chair" },
    { id: 8, furniture: "chair" },
    { id: 9, furniture: "chair" },
    { id: 10, furniture: "chair" },
    { id: 11, furniture: "chair" },
    { id: 12, furniture: "chair" },
    { id: 13, furniture: "chair" },
    { id: 14, furniture: "chair" },
  ],
  newChairText: "",
};

const interiorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CHAIR:
      let newChair = {
        id: 15,
        furniture: state.newChairText,
      };
      return {
        ...state, //возвращаем уже новый объект копируем state
        newChairText: "", //в новом стейте перезаписываем value
        interiorData: [...state.interiorData, newChair], //перезаписываем key interirData
      };
    case UPDATE_NEW_CHAIR_TEXT:
      return { ...state, newChairText: action.entireText };
    default:
      return state;
  }
};

export const addChairCreator = () => {
  return {
    type: SHOW_CHAIR,
  };
};
export const updateChairCreator = (chair) => {
  return {
    type: UPDATE_NEW_CHAIR_TEXT,
    entireText: chair,
  };
};
export default interiorReducer;
