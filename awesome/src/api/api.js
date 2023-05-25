import axios from "axios";
import React from "react";

const instancePlaceHolder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const instanceFootball = axios.create({
  baseURL: "https://football98.p.rapidapi.com/",
  withCredentials: true,
  headers: {
    "X-RapidAPI-Key": "c33e1b5d32msh4327cb83699b9c1p1c70dfjsn0cac546c9ef9",
    "X-RapidAPI-Host": "football98.p.rapidapi.com",
  },
});
const instanceNewspapers = axios.create({
  baseURL: "https://chroniclingamerica.loc.gov/",
});

export const footballAPI = {
  getTeams(endPoint) {
    return instanceFootball.get(endPoint).then((response) => response.data);
  },
};
// export const newspaperInfo = {
//   getNews() {
//     return instanceNewspapers
//       .get("newspapers.json")
//       .then((response) => response.data);
//   },
// };
export const newspapersAPI = {
  getNewspapers(place, currentPage) {
    return instanceNewspapers
      .get(
        `search/titles/results/?terms=${place}&format=json&page=${currentPage}`
      )
      .then((response) => response.data);
  },
};

export const jsonPlaceHolderAPI = {
  getPosts(id) {
    return instancePlaceHolder
      .get(`posts/${id}`)
      .then((response) => response.data);
  },
  getUsers() {
    return instancePlaceHolder.get("users").then((response) => response.data);
  },
};
