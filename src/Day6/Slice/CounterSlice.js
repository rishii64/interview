import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    val : 0
}
const CounterSlice = createSlice({
    name : 'Counter',
    initialState,
    reducers : {
       add : (state, action)=>{
        state.val += 2
       },
       sub : (state, action)=>{
        state.val -= 2
       },
       multi: (state, action)=>{
        state.val *= 2
       },
       div : (state, action)=>{
        state.val /= 2
       }
    }
})
export const {add, sub, multi, div} = CounterSlice.actions
export default CounterSlice.reducer
