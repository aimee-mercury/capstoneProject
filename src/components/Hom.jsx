
import React, { useState, useEffect } from "react";
import "./home.css";
import Navigation from "./Navigation";
import SearchResultsPage from "./SearchResultsPage";

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
         
          </div>

          <div
            className={`search-results ${
              hasSearched ? "" : "search-results-hidden"
            }`} id='modal-overlay' 
          >
            {searchResults.map((book) => (
              <div key={book.id} onClick={() => openModal(book)} >

       
              <h3>*{book.volumeInfo.title}</h3>
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
            <SearchResultsPage book={selectedBook} onClose={closeModal} />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
