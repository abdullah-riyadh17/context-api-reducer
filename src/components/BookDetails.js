import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <div className="title"></div>
      <div className="author"></div>
      <button onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
        DELETE
      </button>
    </li>
  );
};

export default BookDetails;
