import React, { Component } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import APIService from "../../callAPIService/APIService";
import './index.css'



class ActivityChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sessions: [{
                day: '',              //x
                kilogram: '',    //y
                calories: '',
            }]
        }
        this.APIService = new APIService()
    }

    componentDidMount() {
        this.APIService.getUserActivity(this.props.userId, this.userActivity)
    }

    userActivity = (data) => {
        console.log(data)
        this.setState({
            sessions: data.session
        })
    }

    // getXAxis(data) {
    //     let value = "";
    //     switch (data.day) {
    //         case 1:
    //             value = "1";
    //             break;
    //         case 2:
    //             value = "2";
    //             break;
    //         case 3:
    //             value = "3";
    //             break;
    //         case 4:
    //             value = "4";
    //             break;
    //         case 5:
    //             value = "5";
    //             break;
    //         case 6:
    //             value = "6";
    //             break;
    //         case 7:
    //             value = "7";
    //             break;
    //         case 8:
    //             value = "8";
    //             break;
    //         case 9:
    //             value = "9";
    //             break;
    //         case 10:
    //             value = "10";
    //             break;
    //         default:
    //             value = "";
    //     }
    //     return value;
    // }



    render() {
        return (
            <div className='activityChart'>

                <div className='activityHeader'>
                    <p>Activité quotidienne</p>
                    <div className='activityData'>
                        <div>
                            <p>Poids (kg)</p>
                        </div>
                        <div>
                            <p>Poids Calories brûlées (kCal)</p>
                        </div>
                    </div>
                </div>

                <ResponsiveContainer width='100%' height='80%'>

                    <BarChart
                        width={700}
                        height={200}
                        data={this.state.sessions}>

                        <CartesianGrid
                            vertical={false}
                            strokeDasharray="4 2"
                        />

                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            dy={16}
                            axisLine={{ stroke: 'red' }}
                            // tickFormatter={this.getXAxis}
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
                            domain={[0, "dataMax +10"]}
                        />

                        <Tooltip
                            // cursor={{ fill: colors.backgroundGraphGrey }}
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

const CustomTooltip = ({ active, payload }) => {
    if (active) {
        return (
            <div>
                <p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}kCal`}</p>
            </div>
        );
    }

    return null
};

export default ActivityChart