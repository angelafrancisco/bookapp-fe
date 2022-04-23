import { useState } from "react";
// import Modal from 

const BookShelf = (props) =>{
    const [updateModalShowing, setUpdateModalShowing] = useState(false)

    return (
        <>
            {/* HOVER EFFECT ON .book-img.view TO SHOW BUTTON */}
            <div className="book-img view" style={{ backgroundImage: `url(${props.book.image})` }}></div>
            {/* HOVER EFFECT ON .view-btn OUTLINE >> SOLID */}
            <button onClick={props.setShowing(true)} className="view-btn">More Info</button>
            {/* showing = false until edit button clicked */}
            <Modal isOpen={props.showing}>
                <div className="book-view-modal">
                    <button onClick={props.closeModal} className="outline-btn">X</button>
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
                    <button onClick={() => props.setUpdateModalShowing(true)} className="outline-btn edit">Edit</button>
                    {/* UPDATE/EDIT FORM */}
                    <BookForm
                        updateBook={props.updateBook}
                        isNewBook={false}
                        showing={updateModalShowing}
                        setShowing={setUpdateModalShowing}
                        closeModal={() => setUpdateModalShowing(false)}
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