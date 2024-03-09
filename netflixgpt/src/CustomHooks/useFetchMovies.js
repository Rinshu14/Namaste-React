import { useEffect } from "react"
import { api_options } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addnow_playing, addPopular ,addtop_rated} from "../Redux/MovieSlice";
import { now_playing,top_rated,popular } from "../Utils/Constants";

const  useFetchMovies=(movie_category)=>{
    
const dispatch=useDispatch();
console.log(movie_category)

  useEffect(()=>{
    getNowPlayingMovies();
  },[])


  const getNowPlayingMovies=async()=>{
  
    let res=await fetch(`https://api.themoviedb.org/3/movie/${movie_category}?page=11`,api_options)
  
    let data=await res.json();

    switch(movie_category){
    case now_playing:
     dispatch(addnow_playing(data.results))
     break;
    
    case popular:
     dispatch(addPopular(data.results))
     break;
    case top_rated:
     dispatch(addtop_rated(data.results))
     break;
    }
  
  }
}

export default useFetchMovies;