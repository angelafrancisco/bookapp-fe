import { useState } from 'react';
import BookForm from '../books/bookForm';

const SearchContainer = (props) =>{
    const [bookResults, setBookResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const googleBooksURL = "https://www.googleapis.com/books/v1/volumes"
    // const myAPIKey = process.env.API_KEY
    const filter = "maxResults=3&fields=items(id,volumeInfo(title,authors,imageLinks/thumbnail,previewLink),searchInfo/textSnippet)"
    
    // let title = items[i].volumeInfo.title                    // string
    // let author = items[i].volumeInfo.authors                 // array
    // let description = items[i].searchInfo.textSnippet        // string
    // let image = items[i].volumeInfo.imageLinks.thumbnail     // string
    // let link = items[i].volumeInfo.previewLink               // for search view only - do not bring this data to object copy
    
    const handleSearch = (e) => {
        setSearchInput(e.target.value)
    }

    // GET : SEARCH GOOGLE BOOKS FORM ========================================================== //
    const submitAPISearch = async (e) => {
        e.preventDefault()
        const googleBooksApiResponse = await fetch(`${googleBooksURL}?q=${searchInput}&${filter}`);
        const parsedApiResponse = await googleBooksApiResponse.json();
        console.log(parsedApiResponse.items)
        setBookResults(parsedApiResponse.items);
    }

    return (
        <>
            <form onSubmit={submitAPISearch}>
                <label htmlFor="search">Book Search: </label>
                <input onChange={handleSearch} type="text" value={searchInput} placeholder="Search for title or author here..." />
                <button type="submit" className="solid-btn">Search!</button>
            </form>
            <div className="section-container search">
                {bookResults?.length === 0 ?
                    <div className="message-box">
                        <h3 className="message-text">There are no results at this time. Try searching again.</h3>
                    </div>
                :
                    <>
                        {bookResults?.map((book) =>{
                            return (
                                <div className="section-container results" key={book.id}>
                                    <img className="book-img results" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                    <div className="book-box results">
                                        <h3 className="book-text title">Title: {book.volumeInfo.title}</h3>
                                        <p className="book-text author">Author(s): {book.volumeInfo.authors.toString(", ")}</p>
                                        <p className="book-text desc">Description: {book.searchInfo.textSnippet}</p>
                                        <p className="book-text link"><a href={book.volumeInfo.previewLink} target="_blank">Book Preview on Google Books</a></p>
                                        <button onClick={() => props.setShowingForm(true)} className="outline-btn save">Save to My Books!</button>
                                    </div>
                                    <BookForm
                                        key={book.id}
                                        savedBook={book}
                                        isNewBook={true}
                                        createNewBook={props.createNewBook}
                                        newBookServerError={props.newBookServerError}
                                        showingForm={props.showingForm}
                                        setShowingForm={props.setShowingForm}
                                        closeForm={() => props.setShowingForm(false)}
                                        buttonText={"Add Book"}
                                    />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        </>
    )
}

export default SearchContainer;