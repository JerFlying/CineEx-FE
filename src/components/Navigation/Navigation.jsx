import React from 'react';
import { Link } from 'react-router-dom';
import {Component} from "react";
import Item from './NavigationItem'
import './Navigation.scss'

class Navigation extends Component{
    render() {
        return (
            <div className="navigation">
                <div className={'items'}>
                    <Item name={'Tickets'}/>
                    <Item name={'Messages'}/>
                    <Item name={'Space'}/>
                </div>
            </div>
        )
    }
}

export default Navigation;
