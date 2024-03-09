import React from 'react'
import { img_cdn_url } from '../Utils/Constants'

const MovieCard = ({movie}) => {
  const {poster_path}=movie;
  if(!poster_path)return;
  return (
    <div className="w-24 h-32 mx-2 ">
        <img alt="" src={img_cdn_url+movie.poster_path}></img>
      </div>
  )
}

export default MovieCard