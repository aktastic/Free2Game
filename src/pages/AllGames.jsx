import { useContext, useEffect, useState } from "react";
import FilterBar from "../components/filterbar/FilterBar";
import Vector from '../img/Vector.svg'
import Group from '../img/Group.svg'
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
  
  
  console.log(allGames.sort((a,b)=> a.title > b.title));

  useEffect(()=>{
    if(allGames.length <=0){
      setLoading(!loading)
    } else{
      setMapData(allGames)}

    
    if(selectedSort === 'popularity'){
      setMapData(popularityGames)
    }

    if(selectedSort === 'alphabetical'){
      const sortedAlph = [...mapData].sort((a,b)=>{if(a.title<b.title)return -1})
      setMapData(sortedAlph)
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
        genre={game.genre}
        platform={game.platform}
        svg={game.platform==="PC (Windows)" ? Vector : Group }
        />)}
      </section>
    </>
  );
};

export default AllGames;
