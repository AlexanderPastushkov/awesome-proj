import { Route, Routes } from "react-router-dom";
import BestSell from "./BestSellingProd/BestSellProd";
import InteriorContainer from "./Interior/InteriorContainer";
import s from "./Main.module.css";
import NewsContainer from "./News/NewsContainer";

const Main = (props) => {
  return (
    <div className={s.mainContent}>
      <Routes>
        <Route path="/interior" element={<InteriorContainer />} />
        <Route path="/bestsell" element={<BestSell />} />
        <Route path="/news" element={<NewsContainer />} />
      </Routes>
    </div>
  );
};
export default Main;
