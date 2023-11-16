import { createSlice } from '@reduxjs/toolkit';

type bookType = {
    title: string,
    author: string,
    isFavorite: boolean,
    id: string,
    year: number,
}

const initialState: bookType[] = [];

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.unshift(action.payload);
        },
        deleteBook: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        toggleFavorite: (state, action) => {
            state.forEach((book) => {
                if (book.id === action.payload) {
                    book.isFavorite = !book.isFavorite;
                }
            });
        },
    },
});

export const selectBooks = (state) => state.books;
export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions;
export default bookSlice.reducer;
