import { useContext, useEffect, useState } from "react";
import FilterBar from "../components/filterbar/FilterBar";
import Vector from "../img/Vector.svg";
import Group from "../img/Group.svg";
import { AllGamesContext, PopularityContext, RelevanceContext } from "../context/FetchContext";
import Card from "../components/Card";
import HeaderAllGame from "../components/HeaderAllGame";
import "./AllGames.scss";
import { FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";


import Soldier from "../img/noGameFound.png"


const AllGames = () => {
  const { allGames, setAllGanes } = useContext(AllGamesContext);
  const { relevanceGames, setRelevanceGames } = useContext(RelevanceContext)
  const { popularityGames, setPopularityGames } = useContext(PopularityContext);
  const [selectedFilters, setSelectedFilters] = useState({
    filter1: null,
    filter2: null,
  });
  const [selectedSort, setSelectedSort] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 12;
  const [filterData, setFilterData] = useState([])
  const [mapData, setMapData] = useState(relevanceGames)
  const location = useLocation()
  const state = location.state
  
  const [isInitialized, setIsInitialized] = useState(false);
  const [stateUse, setStateuse]=useState(state)
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  

  useEffect(()=>{
    
    
    const filterAndSort = ()=>{
      if (selectedSort !== 'popularity'){
        let filteredData = [...relevanceGames];
    
      if (selectedFilters.filter1) {
        filteredData = filteredData.filter((game) => game.platform === selectedFilters.filter1);
      } 
    
      if (selectedFilters.filter2) {
        filteredData = filteredData.filter((game) => game.genre === selectedFilters.filter2);
      }
      if (selectedSort === 'alphabetical') {
        filteredData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
      } else if (selectedSort === 'Release(desc)') {
        filteredData = filteredData.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      } else if (selectedSort === 'Release(asc)') {
        filteredData = filteredData.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
      }
      setMapData(filteredData);
      setFilterData(filteredData)
      } else{
        let filteredData = [...popularityGames];
        if (selectedFilters.filter1) {
        filteredData = filteredData.filter((game) => game.platform === selectedFilters.filter1);
      } 
    
      if (selectedFilters.filter2) {
        filteredData = filteredData.filter((game) => game.genre === selectedFilters.filter2);
      }setMapData(filteredData);
      setFilterData(filteredData)
    }
      
    }
      if (!isInitialized) {
        setIsInitialized(true);
  
        if (stateUse === 'PC (Windows)' || stateUse === 'Web Browser') {
          const filtered = popularityGames.filter((game) => game.platform === stateUse)
          
          setMapData(filtered)
          console.log(mapData);
          setSelectedSort('popularity');
          setSelectedFilters({
            filter1: stateUse,
            filter2: null,
          });
          
        } else if (stateUse !== null) {
          setMapData(stateUse);
          setFilterData(stateUse);
        } else {
          filterAndSort();
        }
      }else if (Array.isArray(stateUse)) {
        setMapData(stateUse);
        setFilterData(stateUse);
      } else {
        filterAndSort();
      }
      
      
  },[ selectedSort , popularityGames, selectedFilters, relevanceGames, stateUse, isInitialized])


  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
    window.scrollTo(0, 0);
  };
  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
    window.scrollTo(0, 0);
  };

  console.log(allGames);
  const handleFilter = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
    setStateuse(null);
  };

  const handleSort = (value) => {
    setSelectedSort(value);
    setStateuse(null);
  };

  const removeFilter = (filterType) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: null,
    }));
    setStateuse(null)
  };
  const gameFilter = (searchInput) => {
    const filtered = filterData.filter((game) => {
      return game.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    setMapData(filtered);
  };
  const removeSort = () => {
    setSelectedSort(null);
    setStateuse(null)
  };
  console.log(selectedFilters);
  console.log(selectedSort);

  return (
    <>

      <Nav searchFunc={gameFilter} btnShow={false} />
      <section className="AllGamePage">
        <HeaderAllGame
          url="https://s3-alpha-sig.figma.com/img/d101/1476/f3a08a9fe47f06e171e4ab204a6fcad0?Expires=1704067200&Signature=ohrac7d~u~NsLhLGDzlVlnPL2SqNfUy7CIH-81IimDC8lY4Ehl-UwfEFIYL5cmUmxECoANDByrXkeKZZEh5S~HQQE-IpcgFM4BgWaNkp9cPu5VzdDST5b1x1Uh1m6MFwowZjc3cOvQZFcNdwRHS28YIbEamiJF621CRYqePhx78mSzsuuQ6d7ReDKE2xNmGuEYSuIO34PvFUDau-7vxtB0AfLyfISh~Grc01IiDnrxLc-RA5HrLAWhuiu40u5OKV6U1tbtugckJoS15eqdJ3pPZvW6OasgewCPqg28vE9ejXXpgZb7atEgNCA~OMbqXSU7VyHbDby0WKctdHJ2fw2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="All Games"
        />
        <div className="filter_part">
         <FilterBar sortfunc={(e) => handleSort(e.target.value)} filterfunc1={(e)=>{handleFilter('filter1',e.target.value)}} filterfunc2={(e)=>{handleFilter('filter2',e.target.value)}} btn={mapData.length<=0 || stateUse!== null ? <button className="btnAll" onClick={()=>{setMapData(relevanceGames);setStateuse(null)}}>SHOW ALL GAMES</button>:null}/>


          <div className="filterselectwrapper">
            <ul>
              {selectedFilters.filter1 ? (
                <li>
                  <p className="xbtn" onClick={() => removeFilter("filter1")}>
                    <FaTimes />
                  </p>
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
      </div>
      <section className="cardWrapper">
      {mapData?.length<=0 || mapData?.length<=12 ? null : <div onClick={handlePrevClick} className="btn_Navigation">
            <svg width="16.8" height="30" viewBox="0 0 13.9204 24.8407">
              <path
                d="M12.4204,1.5l-10.9204,10.9204l10.9204,10.9203"
                data-paper-data='{"rotation":135}'
              ></path>
            </svg>
          </div>}
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
        { mapData?.length<=0 ? <div className="imgcontainer"><img onClick={()=>{setMapData(relevanceGames);setStateuse(null)}} className="soldierimg" src={Soldier} alt="Soldier with No Game Found Shield"/></div> : null}
        
        {mapData.length<=0 || mapData?.length<=12 ? null : <div className="btn_Navigation" onClick={handleNextClick}>
            <svg width="16.8" height="30" viewBox="0 0 13.9204 24.8408">
              <path
                d="M1.5,1.5l10.9204,10.9204l-10.9204,10.9204"
                data-paper-data='{"rotation":45}'
              ></path>
            </svg>
          </div>}
          </div>

            </section>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default AllGames;
