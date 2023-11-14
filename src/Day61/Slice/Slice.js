import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    val : 0
}

const CountSlice = createSlice ({
    name : 'Count',
    initialState,
    reducers : {
        add : (state, action)=>{
            state.val += 5
        },
        sub : (state, action)=>{
            state.val -= 5
        }
    }
})
export const {add, sub} = CountSlice.actions 
export default CountSlice.reducer