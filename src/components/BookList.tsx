import "./BookList.css"
import {useDispatch, useSelector} from "react-redux";
import {deleteBook, toggleFavorite} from "../redux/Books/actionCreators.ts";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { selectTitleFilter } from "../redux/Slices/FilterSlice.ts";

const BookList = () => {
    const books = useSelector((state) => state.books);
    const titleFilter = useSelector(selectTitleFilter)
    const dispatch = useDispatch()

    const filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().includes(titleFilter.toLowerCase())
    })

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books</p>
            ) : (
                <ul>
                    {filteredBooks.map((book) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {book.title} by {book.author}
                            </div>

                            <div className="book-actions">
                                <span onClick={() => dispatch(toggleFavorite(book.id))}>
                                    {book.isFavorite ? (
                                        <BsBookmarkStarFill className="star-icon" />
                                    ) : (
                                        <BsBookmarkStar  className="star-icon" />
                                    )}
                                </span>

                                <button onClick={() => dispatch(deleteBook(book.id))}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default BookList;
