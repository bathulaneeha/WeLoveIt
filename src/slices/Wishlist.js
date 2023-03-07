import {createSlice} from '@reduxjs/toolkit'
export const wishSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addtowish:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addtowish}=wishSlice.actions
export default wishSlice.reducer