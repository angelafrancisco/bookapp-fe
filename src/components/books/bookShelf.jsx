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
            <img className="book-img view" src={props.book.image || "./img/book-default.jpeg"} alt={props.book.title} />
            <div className="grid-box-btn">
                <button onClick={() => setShowingBook(true)} className="view-btn">More Info</button>
            </div>
            {/* showing = false until edit button clicked */}
            <Modal isOpen={showingBook}>
                <div className="book-view-modal">
                    <button onClick={() => setShowingBook(false)} className="outline-btn">X</button>
                    <div className="book-view-container">
                        <img className="book-img view" src={props.book.image || "./img/book-default.jpeg"} alt={props.book.title} />
                        <div className="book-view-box">
                            <h3 className="book-text title">{props.book.title}</h3>
                            <p className="book-text author">Author: {props.book.author}</p>
                            <p className="book-text desc">Description: {props.book.description}</p>
                            <p className="book-text status">{props.book.read}</p>
                            <p className="book-text list">List Name: {props.book.listName}</p>
                        </div>
                    </div>
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
            </Modal>
        </div>
    )
}

export default BookShelf;