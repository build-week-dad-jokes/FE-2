import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import FormikForm from "./components/SignUp";
import FormikSignIn from "./components/SignIn";
import JokeList from "./components/JokeList";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={FormikForm} />
        <Route exact path="/" component={JokeList} />
        <Route exact path="/signin" component={FormikSignIn} />
      </div>
    </Router>
  );
}

export default App;
