import React from 'react';
import {Component} from "react";
import Item from '../NavigationItem'
import './Navigation.scss'

class Navigation extends Component{
    render() {
        return (
            <div className="navigation">
                <div className={'items'}>
                    <Item name={'Tickets'} url={'/'}/>
                    <Item name={'Messages'} url={'/message'}/>
                    <Item name={'Space'} url={'/space'}/>
                </div>
                <button className={'post'}>New Post</button>
            </div>
        )
    }
}

export default Navigation;
