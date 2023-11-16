import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Slices/bookSlice.ts";
import filterReduces from './Slices/filterSlice.ts'

const store = configureStore({
    reducer: {
        books: booksReducer,
        filter: filterReduces
    },
})


export default store;
