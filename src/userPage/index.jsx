import React, { Component } from "react";
import Header from '../components/Header/index'
import LeftNavBar from '../components/LeftNavBar/index'
import Dashboard from '../components/Dashboard/index'
import './index.css'

class UserPage extends Component {

    render() {

        const { userId } = this.props.match.params

        return (
            <>
                <Header />

                <main className='main'>
                    <LeftNavBar />

                    <Dashboard userId={userId} />
                </main>
            </>
        )
    }
}

export default UserPage