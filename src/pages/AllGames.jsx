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

  
  const [mapData, setMapData] = useState(allGames)
  
  
  
  

  useEffect(()=>{
    

      const filterAndSort = ()=>{
        let filteredData = [...allGames];

        if (selectedFilters.filter1) {
          filteredData = filteredData.filter((game) => game.platform === selectedFilters.filter1);
        } if(selectedFilters.filter1 === 'Web Browser'){
          filteredData = filteredData.filter((game) => game.platform.includes(selectedFilters.filter1) )
        }

        if (selectedFilters.filter2) {
          filteredData = filteredData.filter((game) => game.genre === selectedFilters.filter2);
        }
        if (selectedSort === 'popularity') {
          filteredData = popularityGames;
        } else if (selectedSort === 'alphabetical') {
          filteredData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
        } else if (selectedSort === 'Release(desc)') {
          filteredData = filteredData.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        } else if (selectedSort === 'Release(asc)') {
          filteredData = filteredData.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
        }
        setMapData(filteredData);
      }
      filterAndSort()
  },[ selectedSort , popularityGames, selectedFilters, allGames])

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

        {mapData?.map((game, index)=><Card
        key={index}
        id={game.id}
        thumbnail={game.thumbnail}
        title={game.title}
        genre={game.genre}
        platform={game.platform}
        svg={game.platform==="PC (Windows)" ? Vector : Group }
        filterfunc2={(e)=>{handleFilter('filter2',e.target.textContent)}}
        filterfunc1={()=>{handleFilter('filter1',`${game.platform}`)}}
        filterfunc3={()=>{handleFilter('filter1',"PC (Windows)")}}
        filterfunc4={()=>{handleFilter('filter1',"Web Browser")}}
        />)}

      </section>
    </>
  );
};

export default AllGames;
