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
import SingleBook from "./components/SingleBook";

const App = function () {
  return (
    <>
      <MyNav />
      <Welcome />
      <SingleBook />
      <AllTheBooks />
      <MyFooter />
    </>
  );
};

export default App;
