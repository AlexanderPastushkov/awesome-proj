import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import newsReducer from "./NewsReducer";
import transfersReducer from "./TransferReducer";
import teamsReducer from "./TeamsReducer";
import newspapersReducer from "./NewspapersReducer";
import practiceReducer from "./PracticeReducer";
import usersReducer from "./UsersReducer";

export const store = configureStore({
  reducer: {
    countReducer: countSlice,
    newsPage: newsReducer,
    transfersPage: transfersReducer,
    teamsPage: teamsReducer,
    newspapersPage: newspapersReducer,
    practicePage: practiceReducer,
    usersPage: usersReducer,
  },
});
//========================================================================================================================================================

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);
// let store = legacy_createStore(
//   persistedReducer,
//   applyMiddleware(thunkMiddleware)
// );
// window.store = store;

// export const persistor = persistStore(store);
// let reducers = combineReducers({
//   newsPage: newsReducer,
//   transfersPage: transfersReducer,
//   teamsPage: teamsReducer,
//   newspapersPage: newspapersReducer,
//   practicePage: practiceReducer,
//   usersPage: usersReducer,
// });
