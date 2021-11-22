//React
import React, { Component } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import PropTypes from 'prop-types';

//Datas
import APIService from "../../callAPIService/APIService";

//Style
import './index.css'



/**
 * Custom tooltip of BarChart
 * @param {boolean} active     Tooltip status
 * @param {array} payload      Containing the information of the content to be displayed in the tooltip
 * @returns {Component}        Div with the information to display (kilogram, calories)
 */
const CustomTooltip = ({ active, payload }) => {
    if (active) {
        return (
            <div className='activityTooltip'>
                <p><strong>{`${payload[0].value}kg`}</strong></p>
                <p><strong>{`${payload[1].value}kCal`}</strong></p>
            </div>
        )
    }

    return null
}


/**
 * Custom X axis of BarChart
 * @param {string} xAxis      X axis data in the forme of (YYYY-MM-DD)
 * @returns {string}          X axis data formatted in the correct format (DD)
 */
const formatXAxis = (xAxis) => {
    xAxis = xAxis.slice(8)
    if (xAxis[0] === "0") {
        xAxis = xAxis.slice(1)
    }
    return xAxis
}


class ActivityChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sessions: [
                {
                    day: "",
                    kilogram: "",
                    calories: ""
                }
            ]
        }
        this.APIService = new APIService()
    }

    componentDidMount() {
        this.APIService.getUserActivity(this.props.userId, this.userActivity)
    }


    /**
     * Update the state with the fetched data
     * @param {object} data       the fetched data from API
     */
    userActivity = (data) => {
        console.log(data)
        this.setState({
            sessions: data.session,
        })
    }

    render() {
        return (
            <div className='activityChart'>

                <div className='activityHeader'>
                    <p className='activitéQuotidienne'><strong> Activité quotidienne</strong></p>
                    <div className='activityData'>
                        <div className='poids'>
                            <div className='poidsDot'></div>
                            <p><strong> Poids (kg)</strong></p>
                        </div>
                        <div className='Calories'>
                            <div className='CaloriesDot'></div>
                            <p> <strong>Calories brûlées (kCal)</strong></p>
                        </div>
                    </div>
                </div>

                <ResponsiveContainer width='100%' height='80%'>

                    <BarChart
                        width={700}
                        height={200}
                        data={this.state.sessions}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 30,
                            bottom: 10,
                        }}
                    >

                        <CartesianGrid
                            vertical={false}
                            strokeDasharray="4 2"
                        />

                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            dy={10}
                            axisLine={{ stroke: '#DEDEDE' }}
                            tickFormatter={formatXAxis}
                            tick={{ fontSize: 14 }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            dx={28}
                            yAxisId="kilogram"
                            orientation="right"
                            dataKey="kilogram"
                            color='red'
                            domain={["dataMin -1", "dataMax +1"]}
                            tick={{ fontSize: 14 }}
                        />

                        <YAxis
                            yAxisId="calories"
                            dataKey="calories"
                            hide={true}
                        />

                        <Tooltip
                            content={<CustomTooltip />}
                        />

                        <Bar
                            barSize={7}
                            radius={[3, 3, 0, 0]}
                            yAxisId="kilogram"
                            dataKey="kilogram"
                            fill='red'
                        />
                        <Bar
                            yAxisId="calories"
                            barSize={7}
                            radius={[3, 3, 0, 0]}
                            dataKey="calories"
                            fill='black'
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>
        )
    }
}





ActivityChart.propTypes = {
    userId: PropTypes.string.isRequired
}

export default ActivityChart