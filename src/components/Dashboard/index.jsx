import React, { Component } from "react";
import AverageSessionsChart from "../AverageSessionsChart";

// import KeyData from "../KeyData";



class Dashboard extends Component {

    render() {

        return (
            <div>
                <h1>Bonjour </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className="dashboard">
                    <div className="charts">
                        {/* <ActivityChart /> */}
                        <div>
                            <AverageSessionsChart />
                            {/* <RadarChart />
                            <KPIChart /> */}
                        </div>
                    </div>

                    {/* <KeyData /> */}

                </div>
            </div>
        )
    }
}

export default Dashboard