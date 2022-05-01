import BookForm from "./bookForm";

const NewBook = (props) =>{
    return (
        <>
            <button onClick={() => props.setShowingForm(true)} className="solid-btn">Add a Custom Book</button>
            <BookForm
                createNewBook={props.createNewBook}
                isNewBook={true}
                newBookServerError={props.newBookServerError}
                showingForm={props.showingForm}
                setShowingForm={props.setShowingForm}
                closeForm={() => props.setShowingForm(false)}
                buttonText={"Add Book"}
            />
        </>
    )
}

export default NewBook;