import {createSlice} from '@reduxjs/toolkit'
export const userSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addtouser:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addtouser}=userSlice.actions
export default userSlice.reducer