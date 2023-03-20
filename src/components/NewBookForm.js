import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        required
      />
      <button type="submit">Add book</button>
    </form>
  );
};

export default NewBookForm;
