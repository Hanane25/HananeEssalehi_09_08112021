import React, { Component } from "react";
import ActivityChart from "../ActivityChart";
import AverageSessionsChart from "../AverageSessionsChart";

import PerformanceChart from "../PerformanceChart";
import ScoreChart from "../ScoreChart";

import KeyData from "../KeyData";
import './index.css'
import DashboardHeader from "../DashboardHeader";



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

export default Dashboard