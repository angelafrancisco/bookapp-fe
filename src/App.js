import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home/home';
import Register from './components/home/register';
import Login from './components/home/login';
import BooksContainer from './components/books/booksContainer';
import './App.scss';

function App() {
  // user backend not complete, useState will act as temporary login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn}
        ></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={
              <Register 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
              />} 
            />
            <Route path="/login" element={
              <Login 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
              />} 
            />
            <Route path="/books" element={<BooksContainer />} />
          </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
