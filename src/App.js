import BookLists from "./components/BookLists";
import Navbar from "./components/Navbar";
import NewBookForm from "./components/NewBookForm";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar></Navbar>
        <BookLists></BookLists>
        <NewBookForm></NewBookForm>
      </BookContextProvider>
    </div>
  );
}

export default App;
