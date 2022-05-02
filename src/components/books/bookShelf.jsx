import { useState } from "react";
import Modal from "./modal"
import BookForm from "./bookForm";

const BookShelf = (props) =>{
    const [showingBook, setShowingBook] = useState(false)
    
    const deleteAndCloseModal = () => {
        props.deleteBook(props.book._id)
        setShowingBook(false)
    }

    return (
        <div className="grid-box" key={props.book._id}>
            <div className="grid-box img">
                <img className="book-img view" src={props.book.image || "./img/book-default.jpeg"} alt={props.book.title} />
                <div className="book-img-overlay">
                    <button onClick={() => setShowingBook(true)} className="outline-btn">More Info</button>
                </div>
            </div>
            <h5 className="book-img-title">{props.book.title}</h5>
            {/* showing = false until edit button clicked */}
            <Modal isOpen={showingBook}>
                <div className="book-form view">
                    <button onClick={() => setShowingBook(false)} className="outline-btn">X</button>
                    <div className="book-view-container">
                        <img className="book-img view" src={props.book.image || "./img/book-default.jpeg"} alt={props.book.title} />
                        <div className="book-view-box">
                            <h2 className="book-text title">{props.book.title}</h2>
                            <p className="book-text author"><span className="bold-text">Author: </span>{props.book.author}</p>
                            <p className="book-text desc"><span className="bold-text">Description: </span><span className="italic-text">{props.book.description}</span></p>
                            <p className="book-text status"><span className="bold-text">Current Status: </span>{props.book.read}</p>
                            <p className="book-text list"><span className="bold-text">List Name: </span>{props.book.listName}</p>
                        </div>
                    </div>
                    <div className="edit-del-buttons">
                        {/* UPDATE/EDIT BUTTON */}
                        <button onClick={() => props.setShowingForm(true)} className="outline-btn">Edit</button>
                        {/* UPDATE/EDIT FORM */}
                        <BookForm
                            key={props.book._id}
                            book={props.book}
                            updateBook={props.updateBook}
                            isNewBook={false}
                            showingForm={props.showingForm}
                            setShowingForm={props.setShowingForm}
                            closeForm={() => props.setShowingForm(false)}
                            buttonText={"Update"} 
                        />
                        {/* DELETE BUTTON */}
                        <button onClick={deleteAndCloseModal} className="solid-btn">Delete</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default BookShelf;