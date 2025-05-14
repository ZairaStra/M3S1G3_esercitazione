import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/MyNav";
import "./components/MyFooter";
import "./components/Welcome";
import "./components/AllTheBooks";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

const App = function () {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={fantasy} />
      <AllTheBooks />
      <MyFooter />
    </>
  );
};

export default App;
