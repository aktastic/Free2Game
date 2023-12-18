import GenreSelect from "./GenreSelect";
import PlatformSelect from "./PlatformSelect";
import SortBySelect from "./SortBySelect";

const FilterBar = (props) => {
    return ( 
        <>
        <div>
            <PlatformSelect func={props.func}/>
            <GenreSelect func={props.func}/>
            <SortBySelect func={props.func}/>
        </div>
        </>
     );
}
 
export default FilterBar;