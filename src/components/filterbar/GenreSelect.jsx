import { useContext } from "react";
import { AllGamesContext } from "../../context/FetchContext";

const GenreSelect = (props) => {
    const {allGames, setAllGames} = useContext(AllGamesContext)
    const allGameGenre = []
    allGames?.map((game)=>{
        allGameGenre.push(game.genre)
    })
    
    const genre = allGameGenre?.filter((value, index)=>{
        return allGameGenre.indexOf(value) === index
    })
    
    return ( 
        <>
        <select name="genre/tag" value={''}onChange={props.func}>
            <option value="" disabled hidden>GENRE/TAG</option>
            {genre?.map((tag, index)=>
                <option value={tag} key={index}>{tag}</option>
            )}
        </select>
        </>
     );
}
 
export default GenreSelect;