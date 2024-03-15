import React from 'react'
import GPTSearch from "./GPTSearch"
import GPTMovieSuggestion from './GPTMovieSuggestion'

const GPTSearchPage = () => {
  return (
    <div className="h-screen overflow-y-scroll w-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg')]">GPTSearch
      <GPTSearch/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearchPage