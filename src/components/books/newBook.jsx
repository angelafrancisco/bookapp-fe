import { useState } from "react";
import BookForm from "./bookForm";

const NewBook = (props) =>{
    // const [showingForm, setShowingForm] = useState(false);
    const [showingForm, setShowingForm] = useState(false);

    return (
        <>
            <button onClick={() => setShowingForm(true)} className="solid-btn">Add a Book!</button>
            <BookForm
                createNewBook={props.createNewBook}
                isNewBook={true}
                newBookServerError={props.newBookServerError}
                showingForm={showingForm}
                setShowingForm={setShowingForm}
                closeForm={() => setShowingForm(false)}
                buttonText={"Add Book"}
            />
        </>
    )
}

export default NewBook;