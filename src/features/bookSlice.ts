import {  books } from '@/Home/allbook'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    book: books,
}
export const bookSlice = createSlice({
    name: "book",

    initialState,
    reducers: {

    }
})




export const bookReducer = bookSlice.reducer;

// default export
