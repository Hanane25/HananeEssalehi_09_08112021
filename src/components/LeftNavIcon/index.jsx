import React from "react";
import { Component } from "react";
import './index.css'

class LeftNavIcon extends Component {
    render() {

        return (
            <div className='iconBackground'>
                <img src={this.props.src} alt="" className='icon' />
            </div>
        )
    }
}

export default LeftNavIcon