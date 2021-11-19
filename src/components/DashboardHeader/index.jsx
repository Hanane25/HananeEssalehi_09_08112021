//React
import React, { Component } from "react";
import PropTypes from 'prop-types';

//Datas
import APIService from "../../callAPIService/APIService";

//Styles
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


    /**
     * Update the state with the fetched data
     * @param {object} data         the fetched data from API
     */
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

DashboardHeader.propTypes = {
    userId: PropTypes.string.isRequired
}


export default DashboardHeader