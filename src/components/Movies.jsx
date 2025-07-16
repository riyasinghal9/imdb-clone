import React, {useContext, useEffect, useState} from 'react'
import axios from "axios"
import {WatchListContext} from '../context/WatchListContext';



export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [pageNo, setpageNo] = useState(1);
    const {watchList,addWatchList,removeFromWatchList} = useContext(WatchListContext);
 

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=ea19c2e0cd9f36984a94bee2fb9cf04a&language=en-US&page=${pageNo}`)
        .then((response) =>{
            console.log("films" , response.data.results);
            setMovies(response.data.results);

        });

    },[pageNo]);
  const handleNext =()=>{
    setpageNo(pageNo+1);

  }
  const handlePrev = () =>{
    if(pageNo==1){
        setpageNo(1);
    }
     else{
        setpageNo(pageNo-1);
    }
  }

  const doesContain = (movie)=>{
    for(let i=0;i<watchList.length;i++){
      if(watchList[i].id==movie.id){
        return true;
      }
    }
    return false;
  }


  return (
    <>
        <div className='text-2xl font-bold text-center m-4'>
      <h2>Trending Movies:</h2>
    </div>
    <div className='flex justify-evenly flex-wrap gap-6'>
      {movies.map((movie, index) => {
        return (
          <div
            className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl flex flex-col justify-between item-end hover:scale-110 duration-200 hover:cursor-pointer flex flex-col justify-between items-end'
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}
            key={index}
            watchList={watchList} 
          >
            <div className='text-white w-full text-center p-2 rounded-lg bg-gray-900/50'>
              {movie.title}
            </div>
            {doesContain(movie)?(
                  <div onClick={()=>removeFromWatchList(movie)}>❌</div>
            ):(
              <div onClick={()=>addWatchList(movie)} className="m-4 flex justify center h-8 w-8">✅</div>
            )}
          </div>
        )
      })}
   <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2 '>
   <div onClick={handlePrev} className='px-8 hover:cursor-pointer'>
    <i className='fa solid fa-arrow-left'></i>
   </div>
   <div>{pageNo}</div>
   <div onClick={handleNext} className='px-8 hover:cursor-pointer'>
    <i className='fa solid fa-arrow-right'></i>
   </div>
   </div>
 
    </div>
    </>
      
  )
}
