import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import FormikForm from './components/SignUp'
import FormikSignIn from './components/SignIn'

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path='/' component={FormikForm}/>
      <Route path='/signin' component={FormikSignIn}/>
      </div>
    </Router>
  );
}

export default App;
