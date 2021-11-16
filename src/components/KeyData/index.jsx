import React, { Component } from "react";
import RightTag from "../RightTag";
import energy from '../../assets/energy.png'
import chicken from '../../assets/chicken.png'
import apple from '../../assets/apple.png'
import cheeseburger from '../../assets/cheeseburger.png'
import APIService from "../../callAPIService/APIService";
import './index.css'



class KeyData extends Component {

    constructor(props) {

        super(props);
        //initial state
        this.state = {
            calorieCount: "",
            proteinCount: "",
            carbohydrateCount: "",
            lipidCount: ""
        }

        this.APIService = new APIService()

    }

    //Méthode de cycle de vie
    componentDidMount() {
        this.APIService.getUserData(12, this.userData)
    }

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

export default KeyData