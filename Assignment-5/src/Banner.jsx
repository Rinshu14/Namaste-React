import { banner_img} from "../utils/Constants"

export default Banner = () => {
return (
      <div className="banr">
    <img
            className="banr_img"
            src={banner_img}
          />
        
      </div>
    );
  };