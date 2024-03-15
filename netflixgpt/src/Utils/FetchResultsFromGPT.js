import react from "react";


import openai from "../Utils/OpenAi";
import { api_options, movie_search_api ,} from "../Utils/Constants";


const FetchResultsFromGPT = async(search_text) => {


  let searchFromgpt = async () => {
    let gpt_search_query = `act as a movie recommendation system and serach movies matching this ${search_text} and give comma seprated list of top 5 movies for example Gadar, Sholay, Don, Golmaal, Koi Mil Gaya  `;
    //like this Gadar, Sholay, Don, Golmaal, Koi Mil Gaya 
    let response = await openai.chat.completions.create({
      messages: [{ role: "user", content: gpt_search_query }],
      model: "gpt-3.5-turbo",
    });
// console.log(response?.choices?.[0].message)
    let search_results = response?.choices?.[0].message?.content.split(",");

    let arr = search_results.map((item) => {
      return searchFromTMDB(item.trim());
    });
    const tmdbResults = await Promise.all(arr);

    return({movieNames:search_results,movieResults:tmdbResults})
    
  };
  let searchFromTMDB = async (search_movie) => {
    let res = await fetch(movie_search_api + search_movie, api_options);
    let data = await res.json();
    return data.results;
  };

  return await searchFromgpt();
};

export default FetchResultsFromGPT;
