import { configureStore } from "@reduxjs/toolkit";
import  blogReducers  from "../Features/blogSlice";



export const store = configureStore({
    reducer: {
        Blogs : blogReducers
    }
})