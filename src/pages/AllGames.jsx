import { useContext, useEffect, useState } from "react";
import FilterBar from "../components/filterbar/FilterBar";
import xicon from '../assets/img/xicon.png'
import { AllGamesContext, PopularityContext } from "../context/FetchContext";
import Card from "../components/Card";

const AllGames = () => {
  const { allGames, setAllGanes } = useContext(AllGamesContext)
  const {popularityGames, setPopularityGames} = useContext(PopularityContext)
  const [selectedFilters, setSelectedFilters] = useState({ filter1: null, filter2: null });
  const [selectedSort, setSelectedSort] = useState(null);
  const [filterData, setFilterData] = useState([])
  const [mapData, setMapData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    if(allGames.length <=0){
      setLoading(!loading)
    } else{
      setMapData(allGames)}

    
    if(selectedSort === 'popularity'){
      setMapData(popularityGames)
    } 
  },[loading, selectedSort])
  console.log(allGames);
  const handleFilter = (filterType, value) =>{
    setSelectedFilters(prevFilters=>({...prevFilters, [filterType]:value}))
  }

  const handleSort = (value) => {
    setSelectedSort(value);
  };

  const removeFilter = (filterType) => {
    setSelectedFilters(prevFilters => ({ ...prevFilters, [filterType]: null }));
  };

  const removeSort = () => {
    setSelectedSort(null);
  };
  console.log(selectedFilters);
  console.log(selectedSort);
  
  return (
    <>
      <FilterBar sortfunc={(e) => handleSort(e.target.value)} filterfunc1={(e)=>{handleFilter('filter1',e.target.value)}} filterfunc2={(e)=>{handleFilter('filter2',e.target.value)}}/>
      <div>
      <ul>
          {selectedFilters.filter1 ? (
            <li>
              <p onClick={() => removeFilter("filter1")}>&times;</p>
              <p>{selectedFilters.filter1}</p>
            </li>
          ): null}

          {selectedFilters.filter2 ? (
            <li>
              <p onClick={() => removeFilter("filter2")}>&times;</p>
              <p>{selectedFilters.filter2}</p>
            </li>
          ):null}

          {selectedSort ? (
            <li>
              <p onClick={removeSort}>&times;</p>
              <p>{selectedSort}</p>
            </li>
          ):null}
        </ul>
      </div>
      <section>
        {mapData?.map((game, index)=><Card
        key={index}
        thumbnail={game.thumbnail}
        title={game.title}
        />)}
      </section>
    </>
  );
};

export default AllGames;
