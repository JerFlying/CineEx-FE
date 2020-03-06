import React from 'react';
import { Link } from 'react-router-dom';
import {Component} from "react";
import './PublicScreening.scss'

class PublicScreening extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Link to={''} className={'public-screening'}>
                <img className={'poster'} src={'https://m.media-amazon.com/images/M/MV5BNWU5ZTg4MTMtYTY0MS00MGJlLWEwYjAtNzZlMzNkZjI3NGU0XkEyXkFqcGdeQXVyNTYzMjU4MTI@._V1_SY1000_SX625_AL_.jpg'} />
                <div className={'lower-content'}>
                    <div className={'film-name'}>Wild Goose</div>
                    <div className={'nearby'}>
                        Nearby
                        <div className={'nearby-infos'}>
                            <span></span>
                            <span>3</span>
                            <span></span>
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default PublicScreening;
