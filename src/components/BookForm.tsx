"use client"
import { useState } from "react";
import "./BookForm.css"
import {useDispatch} from "react-redux";
import {addBook} from "../redux/Slices/bookSlice.ts";
import booksData from '../data/books.json'
import createBook from "../utils/createBook.ts";
import axios from 'axios';

const BookForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');


    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (title && author) {
            const book = createBook({ title, author });

            dispatch(addBook(book))

            setTitle('')
            setAuthor('')
        }
    }

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length);
        const randomBook = booksData[randomIndex];
        const randomBookWithId = createBook(randomBook);

        dispatch(addBook(randomBookWithId));
    }

    const handleAddRandomBookViaApi = async () => {
        const res = await axios.get('http://localhost:4000/random_book');

        if (res.data && res.data.title && res.data.author) {

        }
    }

    return (
        <div className="app-block book-form">
            <h2>
                Book Form
            </h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">
                        Title:
                    </label>

                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="author">
                        Author:
                    </label>

                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>

                <button type="submit">Submit</button>
                <button type="button" onClick={handleAddRandomBook}>Add random</button>
                <button type="button" onClick={handleAddRandomBookViaApi}>Add random book from API</button>
            </form>
        </div>
    )
}

export default BookForm;
