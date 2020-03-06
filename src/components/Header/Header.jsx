import React from 'react';
import {Component} from "react";
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import './Header.scss'
class Header extends Component{
    render() {
        return (
            <div className={'header'}>
                <div className={'header-upper'}>
                    <div className={'search'}>
                        <input className={'search-input'} placeholder={'Find Films, Theaters and Event'}/>
                    </div>
                    <div className={'avatar'}></div>
                </div>
                <div className={'header-lower'}>
                    <Link to={'/'}><div className={classNames('header-item', {'active': true})}>Films</div></Link>
                    <Link to={'theaters'}><div className={'header-item'}>Theaters</div></Link>
                        <Link to={'events'}><div className={'header-item'}>Events</div></Link>
                </div>
            </div>
        )
    }
}

export default Header;
