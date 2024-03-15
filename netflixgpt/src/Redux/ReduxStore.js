import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import MovieSlice from "./MovieSlice";
import GPTSlice from "./GPTSlice"

const appStrore=configureStore(
   {

    reducer:{
        user:userSlice,
        movie:MovieSlice,
        GPTSlice:GPTSlice
    
    }
}

)

export default appStrore;
