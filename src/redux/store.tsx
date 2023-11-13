import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Books/reducers.ts";
import filterReduces from './Slices/FilterSlice.ts'

const store = configureStore({
    reducer: {
        books: booksReducer,
        filter: filterReduces
    },
})


export default store;
