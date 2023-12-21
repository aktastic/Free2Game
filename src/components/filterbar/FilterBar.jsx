import GenreSelect from "./GenreSelect";
import './FilterBar.scss'
import PlatformSelect from "./PlatformSelect";
import SortBySelect from "./SortBySelect";

const FilterBar = (props) => {
    return ( 
        <>
        <div className="filterdiv">
            <PlatformSelect func={props.filterfunc1}/>
            <GenreSelect func={props.filterfunc2}/>
            <SortBySelect func={props.sortfunc}/>
            {props.btn}
            
        </div>
        </>
     );
}
 
export default FilterBar;