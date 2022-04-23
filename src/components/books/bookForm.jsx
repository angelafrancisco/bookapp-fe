import { useState } from "react";
import Modal from "./modal"

const BookForm = (props) => {
    const initialBookObject = {
        title: "",
        author: "",
        description: "",
        image: "",
        read: "",
        listName: ""
    }
    
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" });
    const [newBook, setNewBook] = useState(initialBookObject);
    const [updateBook, setUpdateBook] = useState(props.book);
    
    const handleNewInputChange = (e) => {
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value
        })
    }
    const handleEditInputChange = (e) => {
        setUpdateBook({
            ...updateBook,
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
            props.setShowingForm(false)
            setNewBook(initialBookObject)
        }
    }
    const submitUpdateBook = (e) => {
        e.preventDefault();
        props.updateBook(props.book._id, updateBook);
        props.setShowingForm(false);
    }
    const handleInputChange = props.isNewBook ? handleNewInputChange : handleEditInputChange
    const handleSubmitBook = props.isNewBook ? submitNewBook : submitUpdateBook
    const bookData = props.isNewBook ? newBook : updateBook

    return (
        <Modal isOpen={props.showingForm}>
            <div className="book-form">
                <button onClick={props.closeForm} className="outline-btn">X</button>
                <form onSubmit={handleSubmitBook}>
                    {isValidState.valid ? null : <p className='form-error'>{isValidState.message}</p>}
                    {props.newBookServerError ? <p className='form-error'>{props.newBookServerError}</p> : null}
                    {/* TITLE */}
                    <label htmlFor="title">Book Title: </label>
                    <input onChange={handleInputChange} type="text" name="title" value={bookData.title} />
                    {/* AUTHOR */}
                    <label htmlFor="author">Book Author: </label>
                    <input onChange={handleInputChange} type="text" name="author" value={bookData.author} />
                    {/* DESCRIPTION */}
                    <label htmlFor="description">Book Description: </label>
                    <input onChange={handleInputChange} type="text" name="description" value={bookData.description} />
                    {/* IMAGE */}
                    <label htmlFor="image">Image URL: </label>
                    <input onChange={handleInputChange} type="text" name="image" value={bookData.image} />
                    {/* READ STATUS */}
                    <select onChange={handleInputChange} name="read" required value={bookData.read} >
                        <option value="" disabled>-Select-</option>
                        <option value="Read">Read</option>
                        <option value="Want to Read">Want to Read</option>
                        <option value="Currently Reading">Currently Reading</option>
                    </select>
                    {/* LIST NAME */}
                    <label htmlFor="listName">List Name: </label>
                    <input onChange={handleInputChange} type="text" name="listName" value={bookData.listName} />
                    <button type="submit" className="solid-btn">{props.buttonText}!</button>
                </form>
            </div >
        </Modal>
    )
}

export default BookForm;