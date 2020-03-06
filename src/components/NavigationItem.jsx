import React from 'react';
import { Link } from 'react-router-dom';
import {Component} from "react";

class NavigationItem extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navigation-item">
                <Link to={this.props.url} className={'active'}>
                    {this.props.name}
                </Link>
            </div>
        )
    }
}

export default NavigationItem;
