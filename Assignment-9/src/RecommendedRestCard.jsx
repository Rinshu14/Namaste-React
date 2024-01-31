export const RecommendedRestCard = (ResturantCard) => {

    
  return (props) => {
   
    return (<div>
        <p>Recommended</p>
        <ResturantCard restaurant={props.restaurant}/>
    </div>
    )
  };
};
