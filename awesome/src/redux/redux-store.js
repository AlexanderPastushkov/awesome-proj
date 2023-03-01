import { combineReducers, legacy_createStore } from "redux";
import interiorReducer from "./InteriorReducer";
import newsReducer from "./NewsReducer";
let reducers = combineReducers({
  newsPage: newsReducer,
  interiorPage: interiorReducer,
});
let store = legacy_createStore(reducers);

export default store;
