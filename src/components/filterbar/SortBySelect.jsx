const SortBySelect = (props) => {
    return ( 
        <select name="sortby" multi onChange={props.func}>
            <option value="relevance">Relevance</option>
            <option value="popularity">Popularity</option>
            <option value="releaseasc">{"Release Date(asc)"}</option>
            <option value="releasedesc">{"Release Date(desc)"}</option>
            <option value="alphabetical">Alphabetical</option>
        </select>
     );
}
 
export default SortBySelect;