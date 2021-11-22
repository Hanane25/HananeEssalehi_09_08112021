//React
import React, { Component } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';

//Datas
import APIService from "../../callAPIService/APIService";

//Style
import './index.css';


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


    /**
     * Update the state with the fetched data
     * @param {object} data         the fetched data from API
     */
    UserScore = (data) => {
        console.log(data)
        this.setState({
            todayScore: data.todayScore
        })
    }


    render() {

        const score = [{ value: this.state.todayScore }, { value: 1 - this.state.todayScore }]
        const colors = ['#FF0000', 'transparent']

        return (

            <div className='scoreChart'>
                <p className='score'><strong>Score</strong></p>

                <ResponsiveContainer width='100%' height='100%'>
                    <PieChart width={258} height={263}>

                        <Pie
                            data={score}
                            innerRadius={70}
                            outerRadius={80}
                            startAngle={90}
                            dataKey="value"
                            endAngle={450}
                        >
                            {score.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    stroke="transparent"
                                    cornerRadius="50%"
                                    fill={colors[index % colors.length]}
                                />
                            ))}

                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className='scoreDescription'>
                    <p><span className='todayScore'><strong>{`${this.state.todayScore * 100}%`}</strong></span></p>
                    <p className='obj'>de votre<br />
                        objectif</p>
                </div>

            </div>
        )
    }
}

ScoreChart.propTypes = {
    userId: PropTypes.string.isRequired
}

export default ScoreChart