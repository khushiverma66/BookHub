import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>BookHub is your premier destination for literary exploration. With an extensive collection of books, genres, and authors, BookHub offers a user-friendly platform to search, discover, and explore your next great read. Whether you're an avid reader or just starting your literary journey, BookHub is your go-to resource for finding, reviewing, and discussing books. Join a vibrant community of book enthusiasts and embark on a literary adventure today!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header