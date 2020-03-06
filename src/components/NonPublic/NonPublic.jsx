import React from 'react';
import { Link } from 'react-router-dom';
import {Component} from "react";
import './NonPublic.scss'

class NonPublic extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Link to={''} className={'non-public'}>
                <img className={'poster'} src={'https://m.media-amazon.com/images/M/MV5BNWU5ZTg4MTMtYTY0MS00MGJlLWEwYjAtNzZlMzNkZjI3NGU0XkEyXkFqcGdeQXVyNTYzMjU4MTI@._V1_SY1000_SX625_AL_.jpg'} />
                <div  className={'content-right'}>
                    <div className={'film-name'}>Wild Goose</div>
                    <div>Bqwr</div>
                    <div className={'info'}>
                        <span>1993</span>
                        <span>China</span>
                        <span>0 screening this year</span>
                    </div>
                    <div className={'availability'}>
                        <span>3</span>
                        <span>3</span>
                    </div>
                </div>
            </Link>
        )
    }
}

export default NonPublic;
