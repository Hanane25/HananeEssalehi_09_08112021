//React
import React, { Component } from "react";

//Component
import LeftNavIcon from '../LeftNavIcon/index';

//Assets
import yoga from '../../assets/leftNavBar/yoga.png'
import swimmer from '../../assets/leftNavBar/swimmer.png'
import biker from '../../assets/leftNavBar/biker.png'
import weight from '../../assets/leftNavBar/weight.png'

//Styles
import './index.css'


/**
 * Display the left navigation bar 
 * @returns {Component}     Left navigation with icons and Copyright
 */
class LeftNavBar extends Component {
    render() {
        return (
            <div className='LeftNavBar'>
                <div className='icons'>
                    <LeftNavIcon src={yoga} />
                    <LeftNavIcon src={swimmer} />
                    <LeftNavIcon src={biker} />
                    <LeftNavIcon src={weight} />
                </div>
                <div className='copyright'>
                    <p>Copyright, SportSee 2020</p>
                </div>
            </div>

        )
    }
}

export default LeftNavBar