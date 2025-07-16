import { createContext, useState, useEffect } from "react";

const WatchListContext = createContext();

export default function WatchListContextWrapper({ children }) {
  const [watchList, setWatchList] = useState([]);
  useEffect(() => {
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
    if (moviesFromLocalStorage) {
      setWatchList(moviesFromLocalStorage);
    }
  }, []);
  const addWatchList = (movie) => {
    const updatedWatchList = [...watchList, movie]; // watchList.concat(movieObj)
    setWatchList(updatedWatchList);
    localStorage.setItem("movies", JSON.stringify(updatedWatchList));
  };
  const removeFromWatchList = (movie) => {
    let filteredMovies = watchList.filter((movieobj) => {
      return movieobj.id != movie.id;
    }); // return all those movies whose id is not equal to movieObj.id
    setWatchList(filteredMovies);
    localStorage.setItem("movies", JSON.stringify(filteredMovies));
  };
  console.log("watchlist", watchList);

  return (
    <WatchListContext.Provider
      value={{ addWatchList, removeFromWatchList, watchList, setWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
}

export { WatchListContext };