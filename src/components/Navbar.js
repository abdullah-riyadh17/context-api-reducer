import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { state } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Book To Read List</h1>
      <p>Currently you have {state?.length} books to get through....</p>
    </div>
  );
};

export default Navbar;
