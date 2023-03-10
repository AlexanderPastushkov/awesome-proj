import { Route, Routes } from "react-router-dom";
import BestSellContainer from "./BestSellingProd/BestSellProdContainer";
import InteriorContainer from "./Interior/InteriorContainer";
import s from "./Main.module.css";
import NewsContainer from "./News/NewsContainer";
import TryToShowBestSell from "./TryToShowBestSell/TryToShowBestSell";

const Main = () => {
  return (
    <div className={s.mainContent}>
      <Routes>
        <Route path="/interior" element={<InteriorContainer />} />
        <Route path="/bestsell" element={<BestSellContainer />} />
        <Route path="/news" element={<NewsContainer />} />
        <Route path="/best" element={<TryToShowBestSell />} />
      </Routes>
    </div>
  );
};
export default Main;
