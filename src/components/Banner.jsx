import React,{useEffect,useState} from 'react'
import axios from "axios"

export default function Banner() {
  const [bannerImage,setBannerImage] = useState("");
  const [title,setTitle] = useState("");
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=ea19c2e0cd9f36984a94bee2fb9cf04a&language=en-US&page=1`)
    .then((response)=>{
      console.log("films",response.data.results[0]);
      const firstMovie = response.data.results[0];
      const firstMovieTitle = firstMovie.title;
      const firstMoviePoster = firstMovie.backdrop_path;
      setBannerImage(
        `https://image.tmdb.org/t/p/original/${firstMoviePoster}`
      );
      setTitle(firstMovieTitle);
    });

  },[]);

  
  return (
    <div className='h-[20vh] md:h-[75vh] bg-color bg-center flex items-end' style={{
backgroundImage: `url(${bannerImage})`}}
 >
    <div className='text-white w:full text-2xl p-2 text-center'>{title}</div>
    </div>
  )
    }

