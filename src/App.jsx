import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AllGamesContext,
  PopularityContext,
  RelevanceContext,
} from "./context/FetchContext";

import Home from "./pages/Home";
import Details from "./pages/Details";
import AllGames from "./pages/AllGames";
import RecentlyAdded from "./pages/RecentlyAdded";
import "./App.scss";
import FetchAllGames from "./data/FetchAllGames";
import FetchPopularity from "./data/FetchPopularity";
import FetchRelevance from "./data/FetchRelevance";
import Nav from "./components/Nav";
import Menu from "./components/Menu";

function App() {
  const [allGames, setAllGames] = useState([]);
  const [popularityGames, setPopularityGames] = useState([]);
  const [relevanceGames, setRelevanceGames] = useState([]);

  return (
    <>
      <AllGamesContext.Provider value={{ allGames, setAllGames }}>
        <PopularityContext.Provider
          value={{ popularityGames, setPopularityGames }}
        >
          <RelevanceContext.Provider
            value={{ relevanceGames, setRelevanceGames }}
          >
            <FetchAllGames />
            <FetchPopularity />
            <FetchRelevance />
            <BrowserRouter>
            <Nav />
            {/* <Menu /> */}
            <Menu />
      

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/allgames" element={<AllGames />} />
                <Route path="/recentlyadded" element={<RecentlyAdded />} />
              </Routes>
            </BrowserRouter>
          </RelevanceContext.Provider>
        </PopularityContext.Provider>
      </AllGamesContext.Provider>
    </>
  );
}

export default App;
