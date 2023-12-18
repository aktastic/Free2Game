import { useContext } from "react";
import { AllGamesContext } from "../../context/FetchContext";

const GenreSelect = (props) => {
    const {allGames, setAllGames} = useContext(AllGamesContext)
    const allGameGenre = []
    allGames?.map((game)=>{
        allGameGenre.push(game.genre)
    })
    console.log(allGameGenre);
    const genre = allGameGenre?.filter((value, index)=>{
        return allGameGenre.indexOf(value) === index
    })
    console.log(genre);
    return ( 
        <>
        <select name="genre/tag" onChange={props.func}>
            <option value="">GENRE/TAG</option>
            {genre?.map((tag, index)=>
                <option value={tag} key={index}>{tag}</option>
            )}
        </select>
        </>
     );
}
 
export default GenreSelect;