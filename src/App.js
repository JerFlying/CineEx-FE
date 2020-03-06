import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation";
import Films from "./pages/Films/Films";
import Theaters from "./pages/Theaters/Theaters";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation/>
                <Route path='/' component={Films}></Route>
                <Route path='/theaters' component={Theaters}></Route>
            </Router>
        </div>

    );
}

export default App;
