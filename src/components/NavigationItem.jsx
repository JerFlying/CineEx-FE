import React from 'react';
import { Link } from 'react-router-dom';
import {Component} from "react";
import ''

class Navigation extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navigation-item">
                <Link to={this.props.url}>
                    {this.props.name}
                </Link>
            </div>
        )
    }
}

export default Navigation;
