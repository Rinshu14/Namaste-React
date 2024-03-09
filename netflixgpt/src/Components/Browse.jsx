import React  from 'react'
import Header from './Header'
import useFetchMovies from '../CustomHooks/useFetchMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { now_playing } from '../Utils/Constants'




const Browse = () => {

  useFetchMovies(now_playing);

return (
  
    <div >
    
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
  )
}

export default Browse