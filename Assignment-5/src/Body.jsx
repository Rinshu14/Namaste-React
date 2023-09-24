
import Banner from "./Banner"; 
import ResCard from "./ResCard";

export default Body = ({restaurantsList}) => {
    // console.log(props)
    return <>
      <Banner/>
      <div className="res_card_container">
     {restaurantsList.map((restaurant)=>{
   
    return <ResCard key={restaurant.info.id} restaurant={restaurant.info} />
     })}
      </div>
    </>;
  };