import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import MovieSlice from "./MovieSlice";

const appStrore=configureStore(
   {

    reducer:{
        user:userSlice,
        movie:MovieSlice,
    
    }
}

)

export default appStrore;
