import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import SearchPage from "./components/SearchPage/SearchPage";
import Checklist from "./components/Checklist/Checklist";
import Login from "./components/Login/Login";
import Result from "./components/Result/Result";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route exact path="/">
            <Banner />
            <Category />
          </Route>
          <Route path="/checklist">
            <Checklist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
