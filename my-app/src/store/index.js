import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";
const store = configureStore({
    reducer:{
        taskSlice:taskSlice.reducer 
    }
})
export default store;