import { useState } from "react";
import Modal from "./modal"
import BookForm from "./bookForm";

const BookShelf = (props) =>{
    const [showingBook, setShowingBook] = useState(false)
    const [showingForm, setShowingForm] = useState(false);
    
    return (
        <>
            {/* HOVER EFFECT ON .book-img.view TO SHOW BUTTON */}
            <div className="book-img view" style={{ backgroundImage: `url(${props.book.image})` }}></div>
            {/* HOVER EFFECT ON .view-btn OUTLINE >> SOLID */}
            <button onClick={() => setShowingBook(true)} className="view-btn">More Info</button>
            {/* showing = false until edit button clicked */}
            <Modal isOpen={showingBook}>
                <div className="book-view-modal">
                    <button onClick={() => setShowingBook(false)} className="outline-btn">X</button>
                    <div className="book-view-container">
                        <div className="book-img view" style={{ backgroundImage: `url(${props.book.image})` }}></div>
                        <div className="book-view-box">
                            <h3 className="book-text title">{props.book.title}</h3>
                            <p className="book-text author">Author: {props.book.author}</p>
                            <p className="book-text desc">Description: {props.book.description}</p>
                            <p className="book-text status">{props.book.read}</p>
                            <p className="book-text list">List Name: {props.book.listName}</p>
                        </div>
                    </div>
                    {/* UPDATE/EDIT BUTTON */}
                    <button onClick={() => setShowingForm(true)} className="outline-btn edit">Edit</button>
                    {/* UPDATE/EDIT FORM */}
                    <BookForm
                        key={props.book._id}
                        book={props.book}
                        updateBook={props.updateBook}
                        isNewBook={false}
                        showingForm={showingForm}
                        setShowingForm={setShowingForm}
                        closeForm={() => setShowingForm(false)}
                        buttonText={"Update"} 
                    />
                    {/* DELETE BUTTON */}
                    <button onClick={() => props.deleteBook(props.book._id)} className="solid-btn">Delete</button>
                </div>
            </Modal>
        </>
    )
}

export default BookShelf;