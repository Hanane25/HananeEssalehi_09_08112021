import React from "react";
import { Component } from "react";
import './index.css'
import PropTypes from 'prop-types';

class LeftNavIcon extends Component {
    render() {

        return (
            <div className='iconBackground'>
                <img src={this.props.src} alt="" className='icon' />
            </div>
        )
    }
}

LeftNavIcon.propTypes = {
    src: PropTypes.string.isRequired
}

export default LeftNavIcon