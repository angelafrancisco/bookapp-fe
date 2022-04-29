import { useState } from 'react';
import BookForm from '../books/bookForm';

const SearchContainer = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const [bookResults, setBookResults] = useState([]);
    const [saveBook, setSaveBook] = useState();
    const [searchError, setSearchError] = useState({ valid: false, message: "" });

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
        try {
            const googleBooksApiResponse = await fetch(`${googleBooksURL}?q=${searchInput}&${filter}`);
            const parsedApiResponse = await googleBooksApiResponse.json();
            // console.log(parsedApiResponse.items)
            if (!parsedApiResponse.items || parsedApiResponse.items.length === 0){
                setSearchError({
                    valid: true,
                    message: "There are no results at this time. Try searching again."
                })
            }else{
                setSearchError({
                    valid: false,
                    message: ""
                })
                setBookResults(parsedApiResponse.items);
            }
        }catch (err) {
            console.log(err)
        }
    }
    const selectOneBook = (thisBook) => {
        setSaveBook(thisBook);
        props.setShowingSearchForm(true);
    }
// console.log(searchError.valid, bookResults.length)

    // function to clear page after searching and remove search input text
    const clearSearchResults = ()=> {
        setBookResults([]);
        setSearchInput("");
    }

    return (
        <>
            <div className="content-container search">
                <form onSubmit={submitAPISearch} className="search-form">
                    <label htmlFor="search" className="solid-btn">Search</label>
                    <input onChange={handleSearch} type="text" value={searchInput} placeholder="Book title or author..." />
                    <button type="submit" className="solid-btn search"><i className="fa-solid fa-magnifying-glass fa-inverse fa-flip-horizontal"></i><span className="triangle-r"></span></button>
                </form>
                <button onClick={clearSearchResults} className="outline-btn clear-search">Clear Search</button>
            </div>
            <div className="content-container search">
                {bookResults?.length <= 0 ?
                    searchError.valid ? <div className="message-box"><h3 className="message-text">{searchError.message}</h3></div> : null
                :
                    <>
                        {bookResults.map((book) => {
                            return (
                                <div className="content-container results" key={book.id}>
                                    <div className="content-box top">
                                        <div className="book-box-results">
                                            <h3 className="book-text">Title: {book.volumeInfo.title}</h3>
                                            <p className="book-text"><span className="bold-text">Author(s): </span>{book.volumeInfo.authors?.join(", ") || ""}</p>
                                        </div>
                                        <button onClick={() => selectOneBook(book)} className="solid-btn save">Save to My Books!</button>
                                    </div>
                                    <div className="content-box bottom">
                                        <img className="book-img" src={book.volumeInfo.imageLinks?.thumbnail || "./img/book-default.jpeg"} alt={book.volumeInfo.title} />
                                        <div className="book-box-results detail">
                                            <p className="book-text description"><span className="bold-text">Description: </span><br />{book.searchInfo?.textSnippet || ""}</p>
                                        </div>
                                    </div>
                                    <p className="book-text link"><a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer noopener">Preview on Google Books</a></p>
                                </div>
                            )
                        })}
                    </>
                }
                {saveBook && (
                    <BookForm
                        key={"savedbook"}
                        savedBook={saveBook}
                        isNewBook={true}
                        createNewBook={props.createNewBook}
                        newBookServerError={props.newBookServerError}
                        showingForm={props.showingSearchForm}
                        setShowingForm={props.setShowingSearchForm}
                        closeForm={() => props.setShowingSearchForm(false)}
                        buttonText={"Save Book"}
                        clearSearchResults={clearSearchResults}
                    />
                )}
            </div>
        </>
    )
}

export default SearchContainer;