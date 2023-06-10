import { jsonPlaceHolderAPI } from "../api/api";

const SET_USERS = "SET-USERS";

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users };

    default:
      return state;
  }
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const getUsers = () => {
  return (dispatch) => {
    jsonPlaceHolderAPI
      .getUsers() //axios.create -> we make request from DAL
      .then((data) => {
        dispatch(setUsers(data));
      });
  };
};
export default usersReducer;

// function Dog(name) {
//   this.myName = name;
//   this.age = 4;
//   this.voice = function () {
//     console.log("hey, my name is " + this.myName);
//   };
// }

// const germanShepperd = new Dog("Marta");
// const wolf = new Dog("Alfa");
// germanShepperd.voice();
// wolf.voice();

// var a = {
//   myName: "Alexander",
//   voice() {
//     console.log("Hello world");
//   },
// };
// var b = a;
// b.voice();
// b.voice = () => {
//   console.log("yyoyoyo");
// };
// b.voice();
// b.myName = "Dasha";
// console.log(a.myName);

// const double = (x) => x * 2;

// console.log(double(4));
// let array = ["sanya", "daha", "tima", "marta", "tima", true, 3, 4, 5, "tima"];
// let words = [...array];
// let cats = ["kokos", "morris", "vava"];
// let newArray = [...arr].reverse().map((el) => el);
// console.log(arr);
// newArray.push("olivka", "zhuzha");
// console.log(newArray);
// console.log(newArray.includes("marta"));
// let resultOne = newArray.filter((item, index) => index < 2);
// console.log(resultOne);
// let str = "alex-ivan-olya-zhen-ya";
// let arr5 = str.split("-");
// console.log(arr5);
// let strin = arr5.join("+");
// console.log(strin);
// console.log(Array.isArray(strin));
// for (let index = 0; index < newArray.length; index++) {
//   let element = newArray[index];
//   if (element == "tima") console.log(element);
// }
// function digitize(n) {
//   return String(n).split("").reverse().map(Number);
// }
// console.log(digitize(12345));

// let arr = [
//   { name: "alex", age: 34 },
//   { name: "olya", age: 42 },
//   { name: "dasha", age: 34 },
//   { name: "tima", age: 13 },
// ];
// let result = arr.map((el) => el.name);
// console.log(result);
// console.log(arr);
// let arr = [1, 5, 88, 6, 99, 3, -77, -2];
// console.log(...arr);

// const sol = (str) => {
//   const revStr = str.split("");
//   console.log(revStr);
//   return revStr;
// };

// sol("world");

// const vehicles = ["mustang", "f-150", "expedition"];
// const [,,suv] = vehicles;
// console.log(suv);
