import { useState, useEffect } from 'react';
import apiUrl from '../../apiConfig';
// import Hero from "../hero";
import BookNew from './bookNew';
import BookShelf from './bookShelf';

const BooksContainer =()=>{
    const [books, setBooks] = useState([]);
    const [requestError, setRequestError] = useState("");
    const [newBookServerError, setNewBookServerError] = useState("");

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
                <div className="books-container">
                    <h2 className="section-header">My Bookshelf</h2>
                    <BookNew 
                        createNewBook={createNewBook}
                        newBookServerError={newBookServerError}
                    />
                    <div className="grid-container">
                        {books.map((book) => {
                            return <BookShelf
                                        key={book._id}
                                        book={book}
                                        updateBook={updateBook}
                                        deleteBook={deleteBook}
                                    />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BooksContainer;