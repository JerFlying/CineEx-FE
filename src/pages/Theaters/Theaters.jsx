import React from 'react';
import {Component} from "react";
import Header from '../../components/Header/Header'
import './Theaters.scss'
import Theater from "../../components/Theater/Theater";

class Theaters extends Component{
    render() {
        return (
            <div className={'films'}>
                <Header/>
                <Theater />
            </div>
        )
    }
}

export default Theaters;
