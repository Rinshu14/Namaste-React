import { useEffect } from "react"
import { api_options } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addPopular} from "../Redux/MovieSlice";

const  usePopularMovies=()=>{
     
const dispatch=useDispatch();

  useEffect(()=>{
    getusePopularMovies();
  },[])


  const getusePopularMovies=async()=>{
                       
    let res=await fetch("https://api.themoviedb.org/3/movie/popular?page=1",api_options)
  
    let data=await res.json();
     dispatch(addMovies(data.results))
  
  }
}

export default usePopularMovies;