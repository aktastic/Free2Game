import { useContext, useState } from "react";
import Card from "../components/Card";
import { AllGamesContext } from "../context/FetchContext";

const RecentlyAdded = () => {
  const { allGames, setAllGames } = useContext(AllGamesContext);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 8;
  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };
  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
  };
  return (
    <>
      <section className="recentlyAdded__Wrapper">
        <div>
          <button onClick={handlePrevClick}>GO LEFT</button>
        </div>
        <div>
          {allGames
            ?.slice(startIndex, startIndex + itemsPerPage)
            .map((games) => (
              <Card thumbnail={games.thumbnail} title={games.title} />
            ))}
        </div>
        <button onClick={handleNextClick}>Go Right</button>
      </section>
    </>
  );
};

export default RecentlyAdded;
