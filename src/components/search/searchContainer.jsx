import { useState } from 'react';

const SearchContainer = (props) =>{
    
    return (
        <>
            <form onSubmit={handleSubmitBook}>
                <label htmlFor="search">Book Search: </label>
                <input onChange={handleInputChange} type="text" name="title" value={data} placeholder="Search for title or author here..." />
                <button type="submit" className="solid-btn">Search!</button>
            </form>
        </>
    )
}

export default SearchContainer;