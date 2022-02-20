import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import SearchPage from "./components/SearchPage/SearchPage";
import Checklist from "./components/Checklist/Checklist";
import Login from "./components/Login/Login";
import Result from "./components/Result/Result";
import Colleges from "./components/Colleges/Colleges";
import CollegeDetails from "./components/CollegeDetails/CollegeDetails";
import Footer from "./components/Footer/Footer";
import { VerificationProvider } from "./components/context/VerificationContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Rank-Quest/">
            <Redirect to="/" />
          </Route>
          <Route path="/Login">
            <VerificationProvider>
              <Login />
            </VerificationProvider>
          </Route>

          <Route path="/search">
            <VerificationProvider>
              <SearchPage />
            </VerificationProvider>
          </Route>

          <Route path="/result">
            <Result />
          </Route>
          <Route path="/colleges">
            <Colleges />
          </Route>
          <Route exact path="/Rank-Quest">
            <Banner />
            <Category />
          </Route>
          <Route path="/checklist">
            <Checklist />
          </Route>
          <Route path="/collegedetails">
            <CollegeDetails />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
