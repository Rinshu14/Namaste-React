import React from 'react'
import {  useSelector } from 'react-redux'
import MovieList from './MovieList'
import { IoMdHeartEmpty } from 'react-icons/io'


const GPTMovieSuggestion = () => {

const suggestionList= useSelector((state)=>state.GPTSlice)

if(!suggestionList?.movieResults)return

  return (
    <div className="bg-black bg-opacity-65">GPTMovieSuggestion

{suggestionList?.movieResults.map((item,index)=> 
<MovieList title={suggestionList.movieNames[index]} movieList={item}/>)}
             
    </div>
  )
}

export default GPTMovieSuggestion