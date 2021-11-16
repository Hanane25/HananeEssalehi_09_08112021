import React, { Component } from "react";
import Header from '../components/Header/index'
import LeftNavBar from '../components/LeftNavBar/index'
import Dashboard from '../components/Dashboard/index'
import './index.css'

class UserPage extends Component {
    render() {
        return (
            <>
                <Header />

                <main className='main'>
                    <LeftNavBar />

                    <Dashboard />

                </main>
            </>
        )
    }
}

export default UserPage