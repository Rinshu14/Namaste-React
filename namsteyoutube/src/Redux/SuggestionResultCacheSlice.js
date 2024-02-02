import {createSlice} from "@reduxjs/toolkit"

const SuggestionResultCacheSlice =createSlice({
    name:"SuggestionResultCacheSlice",
    initialState:{},
    reducers:
        {
            // addNewSuggestion:(state,action)=>{
            //   state.initialState.action.key=action.value;
            // },
            addInSuggestion:(state,action)=>{
                //state.initialState.action.key=action.value;
                
                state={...state,...action.payload}
                return state
            },

            

        }
    

    
})

export const {addInSuggestion} = SuggestionResultCacheSlice.actions;
export default SuggestionResultCacheSlice.reducer;