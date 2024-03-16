import React from 'react'
import { img_cdn_url } from '../Utils/Constants'

const MovieCard = ({movie}) => {
  const {poster_path}=movie;
  if(!poster_path)return;
  return (
    <div className=" w-36 md:w-44 mx-2 md:mx-1  ">
        <img  alt="" src={img_cdn_url+movie.poster_path} className="rounded-lg"></img>
      </div>
  )
}

export default MovieCard