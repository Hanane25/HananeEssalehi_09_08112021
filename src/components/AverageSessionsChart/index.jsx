import React from "react";
import { Component } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import APIService from "../../callAPIService/APIService";
import './index.css'
import PropTypes from 'prop-types';

class AverageSessionsChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            line: {
                day: 0,              //x
                sessionLength: ""    //y
            }
        }
        this.APIService = new APIService()
    }

    componentDidMount() {
        this.APIService.getUserAverageSessions(this.props.userId, this.AverageSessions)
    }

    AverageSessions = (data) => {
        console.log(data.line)
        this.setState({
            line: data.line
        })
        console.log(this.state.line)
    }

    getXAxis(data) {
        let value = "";
        switch (data.day) {
            case 1:
                value = "L";
                break;
            case 2:
                value = "M";
                break;
            case 3:
                value = "M";
                break;
            case 4:
                value = "J";
                break;
            case 5:
                value = "V";
                break;
            case 6:
                value = "S";
                break;
            case 7:
                value = "D";
                break;
            default:
                value = "";
        }
        return value;
    }

    render() {

        return (
            <div className='averageSessionsChart'>
                <p className='title'><strong>Durée moyenne des <br />sessions</strong></p>

                <ResponsiveContainer width='100%' height='100%'>

                    <LineChart
                        width={250}
                        height={150}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 20,
                            bottom: 0,
                        }}
                        opacity={'50%'}
                        data={this.state.line}
                    >

                        <XAxis
                            dataKey={this.getXAxis}
                            stroke="white"
                            axisLine={false}
                            tickLine={false}
                            opacity={'70%'}
                            fontSize={'14px'}
                        />

                        <YAxis
                            dataKey="sessionLength"
                            hide={true}
                            type="number"
                            domain={["dataMin - 5", "dataMax + 20"]} />


                        <Tooltip content={<CustomizedTooltip />}
                            cursor={{
                                stroke: "rgba(0, 0, 0, 0.1)",
                                // strokeWidth: 50,
                            }}
                        />

                        <Line
                            type="monotone"
                            stroke="white"
                            strokeWidth={2}
                            dataKey="sessionLength"
                            dot={false}
                            activeDot={{
                                stroke: "rgba(255, 255, 255, 0.2)",
                                strokeWidth: 10,
                                r: 5,
                            }}

                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        )
    }
}

const CustomizedTooltip = ({ payload, active }) => {  //payload: The source data of the content to be displayed in the tooltip
    //if active is true the tooltip is displayed
    if (active) {
        return (
            <div className='lineTooltip'>
                <strong>{`${payload[0].value} min`}</strong>
            </div>
        )
    }
    return null
}

AverageSessionsChart.propTypes = {
    userId: PropTypes.string.isRequired
}


export default AverageSessionsChart