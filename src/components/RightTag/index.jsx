import React, { Component } from "react";
import './index.css'

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

export default RightTag