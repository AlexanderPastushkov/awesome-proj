import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./Main.module.css";
import NewsContainer from "./News/NewsContainer";
import NewspapersContainer from "./Newspapers/NewspapersContainer";
import UnitedCounters from "./Practice/shouldComponentUpdatePractice/UnitedCounters";
import UnitedComps from "./Practice/UnitedComps/UnitedComps";
import { Example } from "./renderProp/dataProvider/Example1";
import TableContainer from "./Table/TableContainer";
import TeamsContainer from "./Teams/TeamsContainer";
import TransfersContainer from "./Transfers/TransfersContainer";
import UsersFunctional from "./Users/UsersFunctional";
const Main = () => {
  return (
    <div className={s.mainContent}>
      <Routes>
        <Route path="/results" element={<TransfersContainer />} />
        <Route path="/teams" element={<TeamsContainer />} />
        <Route path="/news" element={<NewsContainer />} />
        <Route path="/newspapers" element={<NewspapersContainer />} />
        <Route path="/table" element={<TableContainer />} />
        <Route path="/users" element={<UsersFunctional />} />
        <Route path="/posts" element={<Example />} />
        {/* <Route path="/posts" element={<ExampleWithChildren />} /> EXAMPLE of render props*/}
        <Route path="/practice" element={<UnitedComps />} />
        <Route path="/counters" element={<UnitedCounters />} />
      </Routes>
    </div>
  );
};
export default Main;
