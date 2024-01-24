import React from "react";
import './SearchResultModel.css' 

function SearchResultModal({ book, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{book.volumeInfo.title}</h2>
        <p>Author(s): {book.volumeInfo.authors?.join(", ") || "Unknown"}</p>
        <p>Published Date: {book.volumeInfo.publishedDate || "Unknown"}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SearchResultModal;
