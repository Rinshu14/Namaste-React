import { createSlice } from "@reduxjs/toolkit";

const suggestSlice=createSlice({
    name:"suggestSlice",
    initialState:{
        show:false
    },
    reducers:{
        setShowTrue:(state,action)=>{
        state.show=true;
        },
        setShowFalse:(state,action)=>{
            
            state.show=false;
            },
    }
})

export const {setShowFalse,setShowTrue} = suggestSlice.actions;
export default suggestSlice.reducer
