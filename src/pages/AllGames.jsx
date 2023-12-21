import { useContext, useEffect, useState } from "react";
import FilterBar from "../components/filterbar/FilterBar";
import Vector from "../img/Vector.svg";
import Group from "../img/Group.svg";
import { AllGamesContext, PopularityContext } from "../context/FetchContext";
import Card from "../components/Card";
import HeaderAllGame from "../components/HeaderAllGame";
import './AllGames.scss'
import { FaTimes } from 'react-icons/fa';
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ArrowRight from "../img/arrow-right.png";
import ArrowLeft from "../img/arrow-left.png";

const AllGames = () => {
  const { allGames, setAllGanes } = useContext(AllGamesContext);
  const { popularityGames, setPopularityGames } = useContext(PopularityContext);
  const [selectedFilters, setSelectedFilters] = useState({
    filter1: null,
    filter2: null,
  });
  const [selectedSort, setSelectedSort] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 12;
  const [filterData, setFilterData] = useState([])
  const [mapData, setMapData] = useState(allGames)
  const location = useLocation()
  const state = location.state
  
  
  const [stateUse, setStateuse]=useState(state)
  
  

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
        setFilterData(filteredData)
      }
      if(stateUse !== null){
        setMapData(stateUse)
        setFilterData(stateUse)
      } else{
        filterAndSort()
      }
      
      
  },[ selectedSort , popularityGames, selectedFilters, allGames, stateUse])

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };
  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
  };

  console.log(allGames);
  const handleFilter = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
    setStateuse(null)
  };

  const handleSort = (value) => {
    setSelectedSort(value);
    setStateuse(null)
  };

  const removeFilter = (filterType) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: null,
    }));
  };
const gameFilter = (searchInput) =>{
  const filtered = filterData.filter((game)=>{
    return game.title.toLowerCase().includes(searchInput.toLowerCase())
  })
  setMapData(filtered)
  
}
  const removeSort = () => {
    setSelectedSort(null);
  };
  console.log(selectedFilters);
  console.log(selectedSort);

  return (
    <>
    <Nav searchFunc={gameFilter}
    btnShow={false}/>
    <section className="AllGamePage">
      <HeaderAllGame/>
    <FilterBar sortfunc={(e) => handleSort(e.target.value)} filterfunc1={(e)=>{handleFilter('filter1',e.target.value)}} filterfunc2={(e)=>{handleFilter('filter2',e.target.value)}} btn={stateUse!==null ? <button className="btnAll" onClick={()=>setStateuse(null)}>SHOW ALL GAMES</button>:null}/>

      

      <div className="filterselectwrapper">
        <ul>
          {selectedFilters.filter1 ? (
            <li>
              <p className="xbtn" onClick={() => removeFilter("filter1")}><FaTimes/></p>
              <p>{selectedFilters.filter1}</p>
            </li>
          ) : null}

          {selectedFilters.filter2 ? (
            <li>
              <p className="xbtn" onClick={() => removeFilter("filter2")}><FaTimes/></p>
              <p>{selectedFilters.filter2}</p>
            </li>
          ) : null}

          {selectedSort ? (
            <li>
              <p className="xbtn" onClick={removeSort}><FaTimes/></p>
              <p>{selectedSort}</p>
            </li>
          ) : null}
        </ul>
      </div>
      <section className="cardWrapper">
      <div className="btn_Navigation">
          <img src={ArrowLeft} alt="" onClick={handlePrevClick} />
        </div>
        <div className="mapWrap">
        {mapData?.slice(startIndex, startIndex + itemsPerPage).map((game, index)=><Card
        key={index}
        outline='outline'
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
        { mapData?.length<=0 ? <h1>No Game Was Found</h1> : null}
        </div>
        <div className="btn_Navigation">
          <img src={ArrowRight} alt="" onClick={handleNextClick} />
        </div>
      </section>
          
    </section>
    <Footer/>
    </>
  );
};

export default AllGames;
