//React
import React, { Component } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';

//Datas
import APIService from "../../callAPIService/APIService";

//Style
import './index.css'


class PerformanceChart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            kind: {
                1: 'Cardio',
                2: 'Energie',
                3: 'Endurance',
                4: 'Force',
                5: 'Vitesse',
                6: 'Intensité'
            },
            datas: [
                { value: 0, kind: 1 },
                { value: 0, kind: 2 },
                { value: 0, kind: 3 },
                { value: 0, kind: 4 },
                { value: 0, kind: 5 },
                { value: 0, kind: 6 }
            ]
        }

        this.APIService = new APIService()
    }

    componentDidMount() {
        this.APIService.getUserPerformance(this.props.userId, this.userPerformance)
    }


    /**
     * Update the state with the fetched data
     * @param {object} data         the fetched data from API
     */
    userPerformance = (data) => {
        this.setState({
            kind: data.kind,
            datas: data.datas
        })
    }


    render() {
        return (
            <div className='performanceChart'>

                <ResponsiveContainer width='100%' height='100%'>

                    <RadarChart
                        outerRadius={"55%"}
                        cx="47%"
                        cy="50%"
                        data={this.state.datas}
                    >

                        < PolarGrid radialLines={false} />

                        <PolarAngleAxis
                            tickLine={false}
                            stroke="white"
                            dataKey="kind"
                            tickFormatter={(value) => this.state.kind[value][0] + this.state.kind[value].slice(1)}
                        />

                        <Radar
                            dataKey="value"
                            fill='#ff0101'
                            fillOpacity={0.8}
                        />

                    </RadarChart>
                </ResponsiveContainer>

            </div >
        )
    }
}


PerformanceChart.propTypes = {
    userId: PropTypes.string.isRequired
}

export default PerformanceChart