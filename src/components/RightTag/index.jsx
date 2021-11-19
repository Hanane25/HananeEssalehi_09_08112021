import React, { Component } from "react";
import './index.css'
import PropTypes from 'prop-types';

class RightTag extends Component {
    render() {

        return (
            <div className="Tag">
                <div className="imgBackground" style={{ backgroundColor: this.props.color }}>
                    <img src={this.props.src} alt="" />
                </div>
                <div className="description">
                    <span className="number"><strong>{this.props.number}</strong></span>
                    <span className="type">{this.props.type}</span>
                </div>
            </div>
        )
    }
}

RightTag.propTypes = {
    color: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default RightTag