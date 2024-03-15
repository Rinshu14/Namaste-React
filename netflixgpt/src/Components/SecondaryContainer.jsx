import React from 'react'
import useFetchMovies from '../CustomHooks/useFetchMovies'
import { popular,top_rated ,movie_genere_ids} from '../Utils/Constants'
import useFetchMoviesByGenre from '../CustomHooks/useFetchMoviesByGenre'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {

  
  
  useFetchMovies("popular");
  useFetchMovies(top_rated);
  useFetchMoviesByGenre("Action",movie_genere_ids.Action.id)
  useFetchMoviesByGenre("Comedy",movie_genere_ids.Comedy.id)
  useFetchMoviesByGenre("Horror",movie_genere_ids.Horror.id)
  useFetchMoviesByGenre("Romance",movie_genere_ids.Romance.id)
  
  const movie = useSelector((state) => {
    return state.movie;
  });

  if(!movie) return 
 

  return (
    <div className="bg-black text-white">
      
<MovieList title={"now_playing"} movieList={movie.now_playing}/>
<MovieList title={"Popular"} movieList={movie.Popular}/>
<MovieList title={"top_rated"} movieList={movie.top_rated} />

      {Object.keys(movie_genere_ids).map((item)=>{
     
        return <MovieList title={item} movieList={movie[item]}/>

      })}
    </div>
  )
}

export default SecondaryContainer