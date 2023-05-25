import { Route, Routes } from "react-router-dom";
import s from "./Main.module.css";
import NewsContainer from "./News/NewsContainer";
import NewspapersContainer from "./Newspapers/NewspapersContainer";
import PracticeContainer from "./Practice/PracticeContainer";
import TeamsContainer from "./Teams/TeamsContainer";
import TransfersContainer from "./Transfers/TransfersContainer";
import TryToShowBestSell from "./TryToShowBestSell/TryToShowBestSell";
import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import UsersContainer from "./Users/UsersContainer";
import { Example } from "./renderProp/dataProvider/Example1";

const Main = () => {
  return (
    <div className={s.mainContent}>
      <Routes>
        <Route path="/results" element={<TransfersContainer />} />
        <Route path="/teams" element={<TeamsContainer />} />
        <Route path="/news" element={<NewsContainer />} />
        <Route path="/best" element={<TryToShowBestSell />} />
        <Route path="/newspapers" element={<NewspapersContainer />} />
        <Route path="/practice" element={<PracticeContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/posts" element={<Example />} />
      </Routes>
    </div>
  );
};
export default Main;
