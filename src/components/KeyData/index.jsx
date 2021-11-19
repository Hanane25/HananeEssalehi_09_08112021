//React
import React, { Component } from "react";
import PropTypes from 'prop-types';

//Component
import RightTag from "../RightTag";

//Assets
import energy from '../../assets/energy.png'
import chicken from '../../assets/chicken.png'
import apple from '../../assets/apple.png'
import cheeseburger from '../../assets/cheeseburger.png'

//Datas
import APIService from "../../callAPIService/APIService";

//Styles
import './index.css'


class KeyData extends Component {

    constructor(props) {

        super(props);
        this.state = {
            calorieCount: "",
            proteinCount: "",
            carbohydrateCount: "",
            lipidCount: ""
        }

        this.APIService = new APIService()

    }

    componentDidMount() {
        this.APIService.getUserData(this.props.userId, this.userData)
    }

    /**
     * Update the state with the fetched data
     * @param {object} data       the fetched data from API
     */
    userData = (data) => {
        this.setState({
            calorieCount: data.calorieCount,
            proteinCount: data.proteinCount,
            carbohydrateCount: data.carbohydrateCount,
            lipidCount: data.lipidCount
        });
    }

    render() {

        return (
            <div className="rightTags">

                <RightTag src={energy}
                    number={`${this.state.calorieCount}kCal`}
                    type="calories"
                    color="#fbeaea"
                />

                <RightTag src={chicken}
                    number={`${this.state.proteinCount}g`}
                    type="Proteines"
                    color="#e9f4fb"
                />

                <RightTag src={apple}
                    number={`${this.state.carbohydrateCount}g`}
                    type="Glucides"
                    color="#fbf6e5"
                />

                <RightTag src={cheeseburger}
                    number={`${this.state.lipidCount}g`}
                    type="Lipides"
                    color="#fbeaef"
                />

            </div>
        )
    }
}

KeyData.propTypes = {
    userId: PropTypes.string.isRequired
}

export default KeyData