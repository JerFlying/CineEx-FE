import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tickets from './pages/Tickets'
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Router>
        <Navigation />
        <div className="App">
            <Route path='/' component={Tickets}></Route>
        </div>
    </Router>
  );
}

export default App;
