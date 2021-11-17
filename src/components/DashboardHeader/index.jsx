import React, { Component } from "react";
import APIService from "../../callAPIService/APIService";
import './index.css'

class DashboardHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: ''
        }

        this.APIService = new APIService()
    }

    componentDidMount() {
        this.APIService.getUserData(this.props.userId, this.userData)
    }

    userData = (data) => {
        this.setState({
            firstName: data.firstName
        })
    }

    render() {
        return (
            <div className='dashboardHeader'>
                <h1>Bonjour {this.state.firstName} </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        )
    }
}

export default DashboardHeader