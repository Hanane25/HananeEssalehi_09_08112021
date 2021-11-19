//React
import React, { Component } from "react";
import PropTypes from 'prop-types';

//Styles
import './index.css'


/**
 * Display icone of the lef navigation
 * @returns {Component}      div of icons
 */
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