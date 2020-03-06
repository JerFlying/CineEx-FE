import React from 'react';
import {Component} from "react";
import './Theater.scss'

class Theater extends Component{
    render() {
        return (
            <div className="theater">
                <img className={'theater-icon'}/>
                <div className={'theater-name'}>Ullens</div>
                <div className={'info'}>
                    <span>3 Wenhuiyuan Rd, Bei Tai Ping Zhuang, Haidian</span>
                    <span>3.0km</span>
                </div>
                <div className={'availability'}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}

export default Theater;
