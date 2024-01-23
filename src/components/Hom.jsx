// Home.js
import React, { useState, useEffect } from "react";
import "./home.css";
import Navigation from "./Navigation";


function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const openModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchTerm.trim() === "") {
        setSearchResults([]);
        setHasSearched(false);
        return;
      }

      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            searchTerm
          )}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setSearchResults(data.items || []);
        setHasSearched(true);
      } catch (error) {
        console.error("Error fetching books:", error);
        setSearchResults([]);
        setHasSearched(true);
      }
    };

    fetchBooks();
  }, [searchTerm]);

  return (
    <>
      <div>
        <Navigation />
        <div className="ae">
          <h1 className="we">
            Wisdom Library space <br /> to <span>re</span>ad, <span>le</span>
            arn, <span>gr</span>ow and <br /> <span>co</span>nnect.
          </h1>
          <p className="we1">Open every day 9:00 am - 10:00 pm</p>

          <div className="input-container">
            <input
              type="text"
              placeholder="Search a book"
              className="custom-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#FFD43B"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </span>
          </div>

          <div
            className={`search-results ${
              hasSearched ? "" : "search-results-hidden"
            }`}
          >
            {searchResults.map((book) => (
              <div key={book.id} onClick={() => openModal(book)}>
                <h2>{book.volumeInfo.title}</h2>
                <p>
                  Author(s): {book.volumeInfo.authors?.join(", ") || "Unknown"}
                </p>
                <p>
                  Published Date: {book.volumeInfo.publishedDate || "Unknown"}
                </p>
              </div>
            ))}
          </div>

          {showModal && (
            <SearchResultModal book={selectedBook} onClose={closeModal} />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
