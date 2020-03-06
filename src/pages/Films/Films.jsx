import React from 'react';
import {Component} from "react";
import Header from '../../components/Header/Header'
import './Films.scss'
import PublicScreening from "../../components/PublicScreening/PublicScreening";
import NonPublic from "../../components/NonPublic/NonPublic";

class Films extends Component{
    render() {
        return (
            <div className={'films'}>
                <Header/>
                <div className={'title first'}>Public Screening</div>
                <div className={'screenings'}>
                    <PublicScreening/>
                </div>
                <div className={'title'}>Non-Public Screening</div>
                <div className={'screenings'}>
                    <NonPublic />
                </div>
            </div>
        )
    }
}

export default Films;
