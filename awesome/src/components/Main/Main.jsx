import { Route, Routes } from "react-router-dom";
import s from "./Main.module.css";
import NewsContainer from "./News/NewsContainer";
import NewspapersContainer from "./Newspapers/NewspapersContainer";
import PracticeContainer from "./Practice/PracticeContainer";
import TeamsContainer from "./Teams/TeamsContainer";
import TransfersContainer from "./Transfers/TransfersContainer";
import TryToShowBestSell from "./TryToShowBestSell/TryToShowBestSell";
import React from "react";

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
      </Routes>
    </div>
  );
};
export default Main;
