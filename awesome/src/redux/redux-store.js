import { combineReducers, legacy_createStore } from "redux";
import newspapersReducer from "./NewspapersReducer";
import newsReducer from "./NewsReducer";
import practiceReducer from "./PracticeReducer";
import teamsReducer from "./TeamsReducer";
import transfersReducer from "./TransferReducer";
let reducers = combineReducers({
  newsPage: newsReducer,
  transfersPage: transfersReducer,
  teamsPage: teamsReducer,
  newspapersPage: newspapersReducer,
  practicePage: practiceReducer,
});
let store = legacy_createStore(reducers);
window.store = store;
export default store;
//========================================================================================================================================================
