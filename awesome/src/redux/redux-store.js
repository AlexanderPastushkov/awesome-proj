import { combineReducers, legacy_createStore } from "redux";
import bestSellReducer from "./BestSellingReducer";
import interiorReducer from "./InteriorReducer";
import newsReducer from "./NewsReducer";
let reducers = combineReducers({
  newsPage: newsReducer,
  interiorPage: interiorReducer,
  teamsPage: bestSellReducer,
});
let store = legacy_createStore(reducers);

export default store;
//========================================================================================================================================================
// class Man {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }
// let m1 = new Man("Alex", 34);
// m1.sayHi();
// console.log(m1);
