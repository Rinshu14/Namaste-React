
import ShimmerUICard from "./ShimmerUICard";
import SearchBar from "./SearchBar";
export default ShimmerUI = () => {
  return (
    <>
     
    <Banner/>
<SearchBar/>
    <div className="shimmer_container">
     <ShimmerUICard/>
     <ShimmerUICard/>
     <ShimmerUICard/>
     <ShimmerUICard/>
      </div>
    </>
  );
};
