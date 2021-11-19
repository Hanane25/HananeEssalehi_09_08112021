//React
import React, { Component } from "react";
import PropTypes from 'prop-types';

//Components
import ActivityChart from "../ActivityChart";
import AverageSessionsChart from "../AverageSessionsChart";
import PerformanceChart from "../PerformanceChart";
import ScoreChart from "../ScoreChart";
import KeyData from "../KeyData";
import DashboardHeader from "../DashboardHeader";

//Styles
import './index.css'


/**
 * Display the user's Dashboard
 * @returns {Component}      Div with graphs and key data
 */
class Dashboard extends Component {
    render() {
        const { userId } = this.props

        return (
            <div className='headerMainDashboard'>

                <DashboardHeader userId={userId} />

                <div className="dashboard">
                    <div className="charts">
                        <ActivityChart userId={userId} />
                        <div className="bottomCharts">
                            <AverageSessionsChart userId={userId} />
                            <PerformanceChart userId={userId} />
                            <ScoreChart userId={userId} />
                        </div>
                    </div>

                    <KeyData userId={userId} />

                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    userId: PropTypes.string.isRequired
}

export default Dashboard