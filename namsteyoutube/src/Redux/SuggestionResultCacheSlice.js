import {createSlice} from "@reduxjs/toolkit"

const SuggestionResultCacheSlice =createSlice({
    name:"SuggestionResultCacheSlice",
    initialState:{},
    reducers:
        {
            
            addInSuggestion:(state,action)=>{
              
                
                state={...state,...action.payload}
                return state
            },

            

        }
    

    
})

export const {addInSuggestion} = SuggestionResultCacheSlice.actions;
export default SuggestionResultCacheSlice.reducer;