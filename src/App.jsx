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
import FetchDetails from "./data/FetchDetails";

import Nav from "./components/Nav";
import Menu from "./components/Menu";

import "./App.scss";

function App() {
  const [allGames, setAllGames] = useState([]);
  const [popularityGames, setPopularityGames] = useState([]);
  const [relevanceGames, setRelevanceGames] = useState([]);
  const [detailsOfGames, setDetailsOfGames] = useState([]);

  return (
    <>
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
              <FetchDetails />
              <BrowserRouter>
                <Nav />
                <Menu />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/details/:id" element={<Details />} />
                  <Route path="/allgames" element={<AllGames />} />
                  <Route path="/recentlyadded" element={<RecentlyAdded />} />
                  {/* Test Details */}
                  <Route path="/details" element={<Details />} />
                </Routes>
              </BrowserRouter>
            </DetailsContext.Provider>
          </RelevanceContext.Provider>
        </PopularityContext.Provider>
      </AllGamesContext.Provider>
    </>
  );
}

export default App;
