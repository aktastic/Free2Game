const PlatformSelect = (props) => {
    return ( 
        <select name="Platform" value={''}onChange={props.func}>
            <option value="" disabled hidden>Platform</option>
            <option value="PC (Windows), Web Browser">AllPlatforms</option>
            <option value="PC (Windows)">{"PC (Windows)"}</option>
            <option value="Web Browser">Web Browser</option>
        </select>
     );
}
 
export default PlatformSelect;