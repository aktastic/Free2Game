import { useContext, useEffect, useState } from "react";
import FilterBar from "../components/filterbar/FilterBar";
import Vector from "../img/Vector.svg";
import Group from "../img/Group.svg";
import { AllGamesContext, PopularityContext } from "../context/FetchContext";
import Card from "../components/Card";

const AllGames = () => {
  const { allGames, setAllGanes } = useContext(AllGamesContext);
  const { popularityGames, setPopularityGames } = useContext(PopularityContext);
  const [selectedFilters, setSelectedFilters] = useState({
    filter1: null,
    filter2: null,
  });
  const [selectedSort, setSelectedSort] = useState(null);
  const [filterData, setFilterData] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (allGames.length <= 0) {
      setLoading(!loading);
    } else {
      setMapData(allGames);
    }

    if (selectedFilters.filter1 !== null && selectedFilters.filter2 !== null) {
      const filteredBoth = allGames.filter((game) => {
        return (
          game.platform === selectedFilters.filter1 &&
          game.genre === selectedFilters.filter2
        );
      });

      setMapData(filteredBoth);
    }
    if (selectedFilters.filter1 !== null && selectedFilters.filter2 === null) {
      const filteredFirst = allGames.filter((game) => {
        return game.platform === selectedFilters.filter1;
      });

      setMapData(filteredFirst);
    }
    if (selectedFilters.filter1 === null && selectedFilters.filter2 !== null) {
      const filteredSecond = allGames.filter((game) => {
        return game.genre === selectedFilters.filter2;
      });
      setMapData(filteredSecond);
    }

    if (selectedSort === "popularity") {
      setMapData(popularityGames);
    } else if (selectedSort === "alphabetical") {
      const sortedAlph = [...mapData].sort((a, b) => {
        if (a.title < b.title) return -1;
      });
      setMapData(sortedAlph);
    } else if (selectedSort === "Release(desc)") {
      const sortedDesc = [...mapData].sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
      console.log(sortedDesc);
      setMapData(sortedDesc);
    } else if (selectedSort === "Release(asc)") {
      const sortedAsc = [...mapData].sort(
        (a, b) => new Date(a.release_date) - new Date(b.release_date)
      );
      console.log(sortedAsc);
      setMapData(sortedAsc);
    } else console.log("ERRORRRR");
  }, [loading, selectedSort, selectedFilters]);

  console.log(allGames);
  const handleFilter = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleSort = (value) => {
    setSelectedSort(value);
  };

  const removeFilter = (filterType) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: null,
    }));
  };

  const removeSort = () => {
    setSelectedSort(null);
  };
  console.log(selectedFilters);
  console.log(selectedSort);

  return (
    <>
      <FilterBar
        sortfunc={(e) => handleSort(e.target.value)}
        filterfunc1={(e) => {
          handleFilter("filter1", e.target.value);
        }}
        filterfunc2={(e) => {
          handleFilter("filter2", e.target.value);
        }}
      />
      <div>
        <ul>
          {selectedFilters.filter1 ? (
            <li>
              <p onClick={() => removeFilter("filter1")}>&times;</p>
              <p>{selectedFilters.filter1}</p>
            </li>
          ) : null}

          {selectedFilters.filter2 ? (
            <li>
              <p onClick={() => removeFilter("filter2")}>&times;</p>
              <p>{selectedFilters.filter2}</p>
            </li>
          ) : null}

          {selectedSort ? (
            <li>
              <p onClick={removeSort}>&times;</p>
              <p>{selectedSort}</p>
            </li>
          ) : null}
        </ul>
      </div>
      <section>
        {mapData?.map((game, index) => (
          <Card
            key={index}
            thumbnail={game.thumbnail}
            title={game.title}
            genre={game.genre}
            platform={game.platform}
            svg={game.platform === "PC (Windows)" ? Vector : Group}
          />
        ))}
      </section>
    </>
  );
};

export default AllGames;
