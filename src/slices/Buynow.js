import {createSlice} from '@reduxjs/toolkit'
export const buySlice=createSlice({
    name:'buynow',
    initialState:[],
    reducers:{
        addtobuy:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addtobuy}=buySlice.actions
export default buySlice.reducer