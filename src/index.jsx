//React
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

//Component
import UserPage from "../src/userPage/index";

//Style
import './style/index.css'


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/:userId" render={(props) => <UserPage {...props} />}
                />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
