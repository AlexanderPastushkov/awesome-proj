import axios from "axios";

const instanceFootball = axios.create({
  baseURL: "https://football98.p.rapidapi.com/premierleague/",
  withCredentials: true,
  headers: {
    "X-RapidAPI-Key": "c33e1b5d32msh4327cb83699b9c1p1c70dfjsn0cac546c9ef9",
    "X-RapidAPI-Host": "football98.p.rapidapi.com",
  },
});
const instanceNewspapers = axios.create({
  baseURL: "https://chroniclingamerica.loc.gov/",
});
const instanceAnotherFootball = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v3/injures",

  params: { league: "61", season: "2020" },
  headers: {
    "X-RapidAPI-Key": "c33e1b5d32msh4327cb83699b9c1p1c70dfjsn0cac546c9ef9",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
});

export const anotherFootballAPI = {
  getInjures() {
    return instanceAnotherFootball.get().then((response) => response.data);
  },
};

export const footballAPI = {
  getTeams(endPoint) {
    return instanceFootball.get(endPoint).then((response) => response.data);
  },
};
export const newspapersAPI = {
  getNewspapers(place, currentPage) {
    return instanceNewspapers
      .get(
        `search/titles/results/?terms=${place}&format=json&page=${currentPage}`
      )
      .then((response) => response.data);
  },
};
