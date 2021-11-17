import React, { Component } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import APIService from "../../callAPIService/APIService";
import './index.css';

const COLORS = ['#FF0000', '#F8F8F8']

class ScoreChart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todayScore: "",

        }
        this.APIService = new APIService()
    }

    componentDidMount() {
        this.APIService.getUserData(this.props.userId, this.UserScore)
    }

    UserScore = (data) => {
        console.log(data)
        this.setState({
            todayScore: data.todayScore
        })
    }


    render() {

        const score = [{ value: this.state.todayScore }, { value: 1 - this.state.todayScore }]
        // const graphColors = ['red', "transparent"]


        return (

            <div className='scoreChart'>

                <p className='score'><strong>Score</strong></p>

                <ResponsiveContainer width='100%' height='100%'>

                    <PieChart width={258} height={263}>

                        <Pie
                            data={score}
                            innerRadius={70}
                            outerRadius={80}
                            // fill="#8884d8"
                            // paddingAngle={5}
                            startAngle={90}
                            dataKey="value"
                            endAngle={450}
                        >
                            {score.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}

                        </Pie>
                    </PieChart>

                </ResponsiveContainer>

                <div>
                    <p className='description'><span>{`${this.state.todayScore * 100}%`}</span><br /> de votre objectif</p>
                </div>

            </div>
        )
    }
}

export default ScoreChart