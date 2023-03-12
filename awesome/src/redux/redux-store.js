import { combineReducers, legacy_createStore } from "redux";
import newspapersReducer from "./NewspapersReducer";
import newsReducer from "./NewsReducer";
import teamsReducer from "./TeamsReducer";
import transfersReducer from "./TransferReducer";
let reducers = combineReducers({
  newsPage: newsReducer,
  transfersPage: transfersReducer,
  teamsPage: teamsReducer,
  newspapersPage: newspapersReducer,
});
let store = legacy_createStore(reducers);

export default store;
//========================================================================================================================================================
let arr = [];
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 7, 6, 6, 6];
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] === 8) {
//     arr.push(arr1[i]);
//   }
// }
for (let arrItem of arr1) {
  if (arrItem === 6) {
    arr.push(arrItem);
  }
}
console.log(arr);
let arr3 = arr1.reduce((acc, cur) => acc + cur);
console.log(arr3);
//========================================================================================================================================================

let users = ["Vanya", "Ivan"];
users.push("Olya");
let string = users.join("+");

console.log(string);

let str = "vanya,ishtvan,olya";
let arrayyy = string.split("+");
let deleted = users.splice(1, 1);
console.log(arrayyy);

console.log(users);
