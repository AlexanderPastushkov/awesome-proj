import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import newspapersReducer from "./NewspapersReducer";
import newsReducer from "./NewsReducer";
import practiceReducer from "./PracticeReducer";
import teamsReducer from "./TeamsReducer";
import transfersReducer from "./TransferReducer";
import thunkMiddleware from "redux-thunk";
import usersReducer from "./UsersReducer";
import postsReducer from "./PostsReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

let reducers = combineReducers({
  newsPage: newsReducer,
  transfersPage: transfersReducer,
  teamsPage: teamsReducer,
  newspapersPage: newspapersReducer,
  practicePage: practiceReducer,
  usersPage: usersReducer,
  // postsPage: postsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
let store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware)
);
window.store = store;

export const persistor = persistStore(store);
export default store;
//========================================================================================================================================================
