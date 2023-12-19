const SortBySelect = (props) => {
    return ( 
        <select name="sortby" value={''}onChange={props.func}>
            <option value="" disabled hidden>SORT BY</option>
            <option value="relevance">Relevance</option>
            <option value="popularity">Popularity</option>
            <option value="Release(asc)">{"Release Date(asc)"}</option>
            <option value="Release(desc)">{"Release Date(desc)"}</option>
            <option value="alphabetical">Alphabetical</option>
        </select>
     );
}
 
export default SortBySelect;