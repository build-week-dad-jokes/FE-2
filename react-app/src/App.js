import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from './components/PrivateRoute'
import FormikForm from "./components/SignUp";
import FormikSignIn from "./components/SignIn";
import JokeList from "./components/JokeList";
import AddJoke from './components/AddJoke'
import Profile from './components/Profile'
import { axiosWithAuth } from "./utils/axiosWithAuth";


function App() {

  
  
  return (
    
    <Router>
      <div className="App">
        <Route exact path="/" component={FormikForm} />
        <Route  path="/jokes" component={JokeList} />
        <Route  path="/signin" component={FormikSignIn} />
        <Route path='/addjoke' component={AddJoke}/>
        <Route path ='/profile' componet={Profile}/>
      </div>
    </Router>
   
  );
}

export default App;
