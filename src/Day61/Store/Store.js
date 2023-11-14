import { configureStore } from "@reduxjs/toolkit";
import CountSlice from '../Slice/Slice'

const Store = configureStore({
    reducer : {
        data : CountSlice
    }
})
export default Store