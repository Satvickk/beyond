import { createSlice } from "@reduxjs/toolkit";

const initialBlog = {
    allBlogs : [],
    paginationData: { number:0 }
}

export const blogSlice = createSlice({
    name: "Blogs",
    initialState: initialBlog,
    reducers: {
        setBlog: (state, action) => {
            state.allBlogs = [...action.payload.data],
            state.paginationData = action.payload.paginationData
        },
        addBlog: (state, action) => {
            state.allBlogs.push(action.payload.data)
        },
        concatBlog: (state, action) => {
            state.allBlogs = [...state.allBlogs, ...action.payload.allBlogs]
            state.paginationData = {...state.paginationData, ...action.payload.paginationData}
        },
        updateBlog: (state, action) => {
            state.allBlogs = state.allBlogs.map((blog) => blog.id === action.payload.id ? action.payload : blog)
        },
        deleteBlog: (state, action) => {
            state.allBlogs = state.allBlogs.filter((blog) => blog.id !== action.payload.id)
        },
        deleteAllBlog: (state, action) => {
            return initialBlog
        }

    }
})

export const {
    setBlog,
    addBlog,
    updateBlog,
    deleteAllBlog,
    deleteBlog,
    concatBlog
} = blogSlice.actions;

export default blogSlice.reducer