import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state,action)=>{
            state.items=[]
        }
    }
    
})

export const {addItem,removeItem,clearCart} =CartSlice.actions
export default CartSlice.reducer