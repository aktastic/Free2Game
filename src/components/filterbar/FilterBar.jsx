import GenreSelect from "./GenreSelect";

import PlatformSelect from "./PlatformSelect";
import SortBySelect from "./SortBySelect";

const FilterBar = (props) => {
    return ( 
        <>
        <div>
            <PlatformSelect func={props.filterfunc1}/>
            <GenreSelect func={props.filterfunc2}/>
            <SortBySelect func={props.sortfunc}/>
            
        </div>
        </>
     );
}
 
export default FilterBar;