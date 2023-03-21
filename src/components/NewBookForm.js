import React, { useContext, useState } from "react";
import { v4 } from "uuid";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { state, dispatch } = useContext(BookContext);
  console.log(state);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const addData = {
      title,
      author,
      id: v4(),
    };
    dispatch({ type: "ADD_BOOKLIST", payload: addData });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">Add book</button>
    </form>
  );
};

export default NewBookForm;
