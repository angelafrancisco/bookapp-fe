import { useState } from "react";


const BookShelf = (props) => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing)
    }
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" });
    const [updateBook, setUpdateBook] = useState(props.book);
    const handleInputChange = (e) => {
        setUpdateBook({
            ...updateBook,
            [e.target.name]: e.target.value
        })
    }
    const submitUpdateBook = (e) => {
        e.preventDefault();
        props.updateBook(props.book._id, updateBook);
        setShowing(false);
    }
    return (
        <div className="book-index-container" key={props.book._id}>
            <div className="book-index-img" style={{ backgroundImage: `url(${props.book.image})` }}></div>
            <div className="book-index-box">
                <div className="book-index-text-box">
                    <h3 className="book-text-name">{props.book.title}</h3>
                    <p className="book-text type">Author: {props.book.author}</p>
                    <p className="book-text">Description: {props.book.description}</p>
                    <p className="book-text">{props.book.read}</p>
                    <p className="book-text">List Name: {props.book.listName}</p>
                </div>
                {/* <BookModal isOpen={showing}> */}
                    <div className="book-form update">
                        <button onClick={toggleShowing} className="outline-btn">X</button>
                        <form onSubmit={submitUpdateBook}>
                            {isValidState.valid ? null : <p className='form-error'>{isValidState.message}</p>}
                            {/* TITLE */}
                            <label htmlFor="title">Book Title: </label>
                            <input onChange={handleInputChange} type="text" name="title" value={updateBook.title} />
                            {/* AUTHOR */}
                            <label htmlFor="author">Book Author: </label>
                            <input onChange={handleInputChange} type="text" name="author" value={updateBook.author} placeholder="i.e. succulent, cactus, etc." />
                            {/* DESCRIPTION */}
                            <label htmlFor="description">Book Description: </label>
                            <input onChange={handleInputChange} type="text" name="description" value={updateBook.description} />
                            {/* IMAGE */}
                            <label htmlFor="image">Image: </label>
                            <input onChange={handleInputChange} type="number" name="image" value={updateBook.image} />
                            {/* READ STATUS */}
                            <select onChange={handleInputChange} name="read" required value={updateBook.read} >
                                <option value="" disabled>-Select-</option>
                                <option value="Read">Read</option>
                                <option value="Want to Read">Want to Read</option>
                                <option value="Currently Reading">Currently Reading</option>
                            </select>
                            {/* LIST NAME */}
                            <label htmlFor="listName">List Name: </label>
                            <input onChange={handleInputChange} type="text" name="listName" value={updateBook.listName} />
                            <button type="submit" className="solid-btn">Add Book!</button>
                        </form>
                    </div>
                {/* </BookModal> */}
                <button onClick={toggleShowing} className="outline-btn edit">Edit</button>
                <button onClick={() => props.deleteBook(props.book._id)} className="solid-btn">Delete</button>
            </div>
        </div>
    )
}

export default BookShelf;