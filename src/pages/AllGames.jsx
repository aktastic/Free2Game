import { useState } from "react";
import FilterBar from "../components/filterbar/FilterBar";
import xicon from '../assets/img/xicon.png'

const AllGames = () => {
  const [selectedFilters, setSelectedFilters] = useState({ filter1: null, filter2: null });
  const [selectedSort, setSelectedSort] = useState(null);
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
              <img
                src={xicon}
                alt="xicon"
                onClick={() => removeFilter("filter1")}
              />
              {selectedFilters.filter1}
            </li>
          ): null}

          {selectedFilters.filter2 ? (
            <li>
              <img
                src={xicon}
                alt="xicon"
                onClick={() => removeFilter("filter2")}
              />
              {selectedFilters.filter2}
            </li>
          ):null}

          {selectedSort ? (
            <li>
              <img
                src={xicon}
                alt="xicon"
                onClick={removeSort}
              />
              {selectedSort}
            </li>
          ):null}
        </ul>
      </div>
    </>
  );
};

export default AllGames;
