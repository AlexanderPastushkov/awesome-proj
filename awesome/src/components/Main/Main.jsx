import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./Main.module.css";
import NewsContainer from "./News/NewsContainer";
import NewspapersContainer from "./Newspapers/NewspapersContainer";
import UnitedComps from "./Practice/UnitedComps/UnitedComps";
import { ExampleWithChildren } from "./renderProp/dataProvider/Example2";
import TableContainer from "./Table/TableContainer";
import TeamsContainer from "./Teams/TeamsContainer";
import TransfersContainer from "./Transfers/TransfersContainer";
import UsersContainer from "./Users/UsersContainer";

const Main = () => {
  return (
    <div className={s.mainContent}>
      <Routes>
        <Route path="/results" element={<TransfersContainer />} />
        <Route path="/teams" element={<TeamsContainer />} />
        <Route path="/news" element={<NewsContainer />} />
        <Route path="/newspapers" element={<NewspapersContainer />} />
        <Route path="/table" element={<TableContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        {/* <Route path="/posts" element={<Example />} /> */}
        <Route path="/posts" element={<ExampleWithChildren />} />
        <Route path="/practice" element={<UnitedComps />} />
      </Routes>
    </div>
  );
};
export default Main;
