import {createSlice} from '@reduxjs/toolkit'
export const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addtocart}=cartSlice.actions
export default cartSlice.reducer