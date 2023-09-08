import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="main">
          <Header />
          <Main />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
{
  /* <Header />
      <Navbar />
      <div className="wrapper_content ">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/news" element={<NewsContainer />} /> */
}
{
  /* <Route
            path="/music"
            element={<Music mus={props.state.musicPage.musicData} />}
          />
          <Route path="/settings" element={<Set />} />
          <Route
            path="/friends"
            element={<Friends friends={props.state.friendsPage.friendsData} />}
          /> */
}
{
  /* </Routes> */
}
{
  /* </div> */
}

function twoHighest(arr) {
  if (arr.length == 0) return [];
  else if (arr.length > 1) {
    const unique = [...new Set(arr)];
    return unique
      .sort((a, b) => a - b)
      .reverse()
      .slice(0, 2);
  }
}

console.log(twoHighest([100, 500, 3, 49, 500, 69, 7]));
