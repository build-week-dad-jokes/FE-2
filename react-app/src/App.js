import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from './components/PrivateRoute'
import FormikForm from "./components/SignUp";
import FormikSignIn from "./components/SignIn";
import JokeList from "./components/JokeList";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={FormikForm} />
        <PrivateRoute exact path="/protected" component={JokeList} />
        <Route exact path="/signin" component={FormikSignIn} />
      </div>
    </Router>
  );
}

export default App;
