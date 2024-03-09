import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import {  useSelector } from 'react-redux'

const MainContainer = () => {


  
const movies=useSelector((state)=> state.movie.now_playing)


  if(!movies) return;
  //const mainMovie=movies[0];

  const mainMovie = movies[11]
  //movies[Math.floor(Math.random()*20)]
  //const { original_title, overview, id} = mainMovie
  
  return (
    <div className="">
   
        <VideoTitle mainMovie={mainMovie}/>
        <VideoBackground movieId={mainMovie.id} />
    </div>
  )
}

export default MainContainer