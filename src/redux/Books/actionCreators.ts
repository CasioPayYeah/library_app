import * as a from './actionTypes.ts';

export const addBook = (newBook) => {
    return {
        type: a.ADD_BOOK,
        payload: newBook,
    }
}
export const deleteBook = (deletedBookId) => {
    return {
        type: a.DELETE_BOOK,
        payload: deletedBookId,
    }
}
export const toggleFavorite = (favoriteBookId) => {
    return {
        type: a.TOGGLE_FAVORITE,
        payload: favoriteBookId,
    }
}
