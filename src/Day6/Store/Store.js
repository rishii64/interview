import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Slice/CounterSlice";

const Store = configureStore({
    reducer : {
        store : CounterSlice
    }
})
export default Store
