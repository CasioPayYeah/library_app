import "./BookList.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, selectBooks, toggleFavorite } from "../redux/Slices/bookSlice.ts";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import {selectAuthorFilter, selectOnlyFavorite, selectTitleFilter} from "../redux/Slices/filterSlice.ts";

const BookList = () => {
    const books = useSelector(selectBooks);
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const favoriteFilter = useSelector(selectOnlyFavorite);
    const dispatch = useDispatch()

    console.log(books)

    const filteredBooks = books.filter((book) => {
        const matchTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase())
        const matchAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase())
        const matchFavorite = favoriteFilter ? book.isFavorite : true;

        return matchTitle && matchAuthor && matchFavorite;
    })

    const highlightMatch = (text, filter) => {
        if (!filter) return text;

        const regex = new RegExp(`(${filter})`, 'gi')

        return text.split(regex).map((part, index) => {
            if (part.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={index} className="highlight">
                        {part}
                    </span>
                )
            }

            return part;
        });
    }

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
                                {highlightMatch(book.title, titleFilter)}
                                {' '} by {' '}
                                <strong>
                                    {highlightMatch(book.author, authorFilter)}
                                </strong>
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
