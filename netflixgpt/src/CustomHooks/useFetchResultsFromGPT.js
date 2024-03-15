
import react, { useEffect } from "react"
import openai from "../Utils/OpenAi";
import { api_options } from "../Utils/Constants";


const useFetchResultsFromGPT=(search_text)=>{



    let search_results;

useEffect(()=>{
    //searchFromgpt()
    debugger
    if(!search_text) return;
    searchFromTMDB()
})

let searchFromgpt=async()=>{
    let gpt_search_query=`act as a movie recommendation system and serach movies matching this ${search_text} and give comma seprated list of top 5 movies like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya `;
    let response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gpt_search_query }],
    model: 'gpt-3.5-turbo',})

  console.log(response.choices[0].message.content)
  search_results=response?.choices?.[0].message?.content.split(",")
  
  }
}

let searchFromTMDB=async()=>{
 let res=await    fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=idiot',);

 let data= await res.json();
 console.log(data)

}
// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=idiot'

export default useFetchResultsFromGPT;