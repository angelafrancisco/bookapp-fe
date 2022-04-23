import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import apiUrl from '../../apiConfig';
// import Hero from "../hero";
import SearchContainer from '../search/searchContainer';
import NewBook from './newBook';
import BookShelf from './bookShelf';

const BooksContainer =()=>{
    const [books, setBooks] = useState([]);
    const [requestError, setRequestError] = useState("");
    const [newBookServerError, setNewBookServerError] = useState("");

    const [googleBooksAPI, setGoogleBooksAPI] = useState([]);

    const googleBooksURL = "https://www.googleapis.com/books/v1/volumes"
    const myAPIKey = process.env.API_KEY

    // GET : SEARCH GOOGLE BOOKS FORM ========================================================== //
    const getBooksAPI = async (e) => {
        e.preventDefault()
        const querySearch = ""
        // do I need to include '+' for spaces in querySearch?

        try {
            const googleBooksApiResponse = await fetch(`${googleBooksURL}?q=${querySearch}&key=${myAPIKey}`);
            const parsedApiResponse = await googleBooksApiResponse.json();
            setGoogleBooksAPI(parsedApiResponse.data);
        } catch (err) {
            console.log(err);
        }
    }
    // SAVE 1 BOOK
    // do I need a separate route? need to research how to save data from api search ^ and send it to db copying the newBook form parameters
    // title = items[i].volumeInfo.title
    // author(s) = items[i].volumeInfo.authors
    // description = items[i].searchInfo.textSnippet
    // image = items[i].volumeInfo.imageLinks.thumbnail


    // GET ====================================================================================== //
    useEffect(() => {
        const getBooks = async () => {
            try {
                const apiResponse = await fetch(`${apiUrl}/books`);
                const parsedResponse = await apiResponse.json();
                setBooks(parsedResponse.data);
            } catch (err) {
                console.log(err);
            }
        }
        getBooks()
    }, []);

    // CREATE ================================================================================== //
    const createNewBook = async (newBook) => {
        try {
            const apiResponse = await fetch(`${apiUrl}/books`, {
                method: "POST",
                body: JSON.stringify(newBook),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await apiResponse.json();
            console.log(parsedResponse);
            if (parsedResponse.success) {
                setBooks([...books, newBook]);
            } else {
                setNewBookServerError(parsedResponse.data);
            }
        } catch (err) {
            console.log(err)
        }
    }

    // UPDATE ================================================================================== //
    const updateBook = async (idToUpdate, bookToUpdate) => {
        try {
            const apiResponse = await fetch(`${apiUrl}/books/${idToUpdate}`, {
                method: "PUT",
                body: JSON.stringify(bookToUpdate),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await apiResponse.json();
            if (parsedResponse.success) {
                const newBooks = books.map(book => book._id === idToUpdate ? bookToUpdate : book)
                setBooks(newBooks)
                console.log("updating saved book ID#" + idToUpdate);
            } else {
                setRequestError(parsedResponse.data);
            }
        } catch (err) {
            console.log(err)
        }
    }

    // DELETE ================================================================================= //
    const deleteBook = async (idToDelete) => {
        try {
            const apiResponse = await fetch(`${apiUrl}/books/${idToDelete}`, {
                method: "DELETE"
            })
            const parsedResponse = await apiResponse.json();
            console.log(parsedResponse);
            if (parsedResponse.success) {
                const newBooks = books.filter(book => book._id !== idToDelete);
                setBooks(newBooks);
                console.log("deleting saved book ID#" + idToDelete);
            } else {
                console.log("Unable to delete or no saved book ID#" + idToDelete);
            }
        } catch (err) {
            console.log(err);
            setRequestError(err.message)
        }
    }

    return (
        <>
            {/* <Hero/> */}
            <div className="content-wrapper">
                <div className="section-container">
                    <div className="btn-section">
                        {/* SEARCH BUTTON */}
                        {/* <Link to="/search" className="outline-btn">Search for Books!</Link> */}
                        <SearchContainer />
                        {/* NEW BUTTON / NEW FORM */}
                        <NewBook 
                            createNewBook={createNewBook}
                            newBookServerError={newBookServerError}
                        />
                    </div>
                </div>
                <div className="section-container bookshelf">
                    {/* to do: add section for book suggestions here? */}
                    <h2 className="section-header">My Bookshelf</h2>
                    {books.length > 0 ?
                        <div className="grid-container bookshelf">
                            {/* TO DO: SORT BOOKSHELF BY LIST NAME? OR READ STATUS? */}
                            {books.map((book) => {
                                return <BookShelf
                                    key={book._id}
                                    book={book}
                                    updateBook={updateBook}
                                    deleteBook={deleteBook}
                                    requestError={requestError}
                                /> 
                            })}
                        </div>
                    :
                        <div className="grid-container no-books">
                            <div className="message-box">
                                <h3 className="message-text">Looks like you haven't added any books yet!</h3>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default BooksContainer;