import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookLists = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id}></BookDetails>;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">There is no books to read ...</div>
  );
};

export default BookLists;
