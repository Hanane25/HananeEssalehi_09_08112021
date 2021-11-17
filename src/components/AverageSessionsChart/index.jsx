import React from "react";
import { Component } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import APIService from "../../callAPIService/APIService";
import './index.css'

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
                <p className='title'>Durée moyenne des <br />sessions</p>

                <ResponsiveContainer width='100%' height='100%'>

                    <LineChart
                        width={250}
                        height={200}

                        margin={{
                            top: 5,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}

                        // data={[
                        //     { day: 1, sessionLength: 10 },
                        //     { day: 2, sessionLength: 20 },
                        //     { day: 3, sessionLength: 10 },
                        //     { day: 4, sessionLength: 10 },
                        //     { day: 5, sessionLength: 10 },
                        //     { day: 6, sessionLength: 10 },
                        //     { day: 7, sessionLength: 10 },
                        // ]}

                        data={this.state.line}
                    >

                        <XAxis
                            dataKey={this.getXAxis}
                            stroke="white"
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            dataKey="sessionLength"
                            hide={true}
                            type="number"
                            domain={["dataMin -10", "dataMax +30"]} />


                        <Tooltip content={<CustomizedTooltip />} />

                        <Line
                            type="monotone"
                            stroke="white"
                            strokeWidth={2}
                            dataKey="sessionLength"
                            dot={false}
                            activeDot={{
                                stroke: "white",
                                strokeWidth: 9,
                                r: "5"
                            }} />

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
            <div>
                {`${payload[0].value} min`}
            </div>
        )
    }
    return null
}


export default AverageSessionsChart