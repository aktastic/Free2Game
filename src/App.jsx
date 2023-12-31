import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AllGamesContext,
  PopularityContext,
  RelevanceContext,
  DetailsContext,
} from "./context/FetchContext";
import Home from "./pages/Home";
import Details from "./pages/Details";
import AllGames from "./pages/AllGames";
import RecentlyAdded from "./pages/RecentlyAdded";
import FetchAllGames from "./data/FetchAllGames";
import FetchPopularity from "./data/FetchPopularity";
import FetchRelevance from "./data/FetchRelevance";


import Nav from "./components/Nav";
import Menu from "./components/Menu";

import "./App.scss";
import Footer from "./components/Footer";
// import FetchAllGames from "./data/FetchAllGames";

function App() {
  const [allGames, setAllGames] = useState([]);
  const [popularityGames, setPopularityGames] = useState([]);
  const [relevanceGames, setRelevanceGames] = useState([]);
  const [detailsOfGames, setDetailsOfGames] = useState([]);

  const [darkMode, setDarkMode] = useState(true);
  const changeMode = () => setDarkMode(!darkMode);

  return (
    <section className={darkMode ? "darkMode" : "lightMode"}>
      <AllGamesContext.Provider value={{ allGames, setAllGames }}>
        <PopularityContext.Provider
          value={{ popularityGames, setPopularityGames }}
        >
          <RelevanceContext.Provider
            value={{ relevanceGames, setRelevanceGames }}
          >
            <DetailsContext.Provider
              value={{ detailsOfGames, setDetailsOfGames }}
            >
              <FetchAllGames />
              <FetchPopularity />
              <FetchRelevance />

              <BrowserRouter>
                <Menu onClick={changeMode} darkMode={darkMode} />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/details/:id" element={<Details />} />
                  <Route path="/allgames" element={<AllGames />} />
                  <Route path="/recentlyadded" element={<RecentlyAdded />} />
                  {/* Test Details */}
                  <Route path="/details" element={<Details />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </DetailsContext.Provider>
          </RelevanceContext.Provider>
        </PopularityContext.Provider>
      </AllGamesContext.Provider>
    </section>
  );
}

export default App;
