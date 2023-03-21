import React, { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();
const { Provider } = BookContext;
const BookContextProvider = (props) => {
  const [state, dispatch] = useReducer(bookReducer, []);
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(state));
  }, [state]);
  const value = {
    state,
    dispatch,
  };
  return <Provider value={value}>{props.children}</Provider>;
};

export default BookContextProvider;
