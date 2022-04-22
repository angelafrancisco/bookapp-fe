import { useState } from 'react';
// import BookModal from './bookModal';

const BookNew = (props) => {
    const initialBookObject = {
        title: "",
        author: "",
        image: "",
        description: "",
        read: "",
        listName: ""
    }
    const [showing, setShowing] = useState(false);
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" });
    const [newBook, setNewBook] = useState(initialBookObject);
    const toggleShowing = () => {
        setShowing(!showing)
    }
    const handleInputChange = (e) => {
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value
        })
    }
    const submitNewBook = (e) => {
        e.preventDefault()
        let validSubmission = true;
        if (!newBook.title || !newBook.author) {
            setIsValidState({
                valid: false,
                message: "Fields with an asterisk (*) are required!"
            })
            validSubmission = false;
        }
        if (validSubmission) {
            props.createNewBook(newBook)
            setIsValidState({
                valid: true,
                message: ""
            })
            setShowing(false)
            setNewBook(initialBookObject)
        }
    }
    return (
        <>
            {/* UPDATE FORM */}
            {/* <BookModal isOpen={showing}> */}
                <div className="book-form new">
                    <button onClick={toggleShowing} className="outline-btn">X</button>
                    <form onSubmit={submitNewBook}>
                        {isValidState.valid ? null : <p className='form-error'>{isValidState.message}</p>}
                        {props.newBookServerError ? <p className='form-error'>{props.newBookServerError}</p> : null}
                        {/* TITLE */}
                        <label htmlFor="title">Book Title: </label>
                        <input onChange={handleInputChange} type="text" name="title" value={newBook.title} />
                        {/* AUTHOR */}
                        <label htmlFor="author">Book Author: </label>
                        <input onChange={handleInputChange} type="text" name="author" value={newBook.author}/>
                        {/* DESCRIPTION */}
                        <label htmlFor="description">Book Description: </label>
                        <input onChange={handleInputChange} type="text" name="description" value={newBook.description} />
                        {/* IMAGE */}
                        <label htmlFor="image">Image URL: </label>
                        <input onChange={handleInputChange} type="text" name="image" value={newBook.image} />
                        {/* READ STATUS */}
                            <select onChange={handleInputChange} name="read" required value={newBook.read} >
                                <option value="" disabled>-Select-</option>
                                <option value="Read">Read</option>
                                <option value="Want to Read">Want to Read</option>
                                <option value="Currently Reading">Currently Reading</option>
                            </select>
                        {/* LIST NAME */}
                        <label htmlFor="listName">List Name: </label>
                        <input onChange={handleInputChange} type="text" name="listName" value={newBook.listName} />
                        <button type="submit" className="solid-btn">Add Book!</button>
                    </form>
                </div >
            {/* </BookModal> */}
            <button onClick={toggleShowing} className="solid-btn">Add Book!</button>
        </>
    )
}

export default BookNew;