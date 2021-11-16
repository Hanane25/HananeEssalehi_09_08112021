import React from "react";
import ReactDOM from 'react-dom';

import UserPage from '../src/userPage/index'

//Style
import './style/index.css'

ReactDOM.render(
    <React.StrictMode>
        <UserPage />
    </React.StrictMode>,
    document.getElementById('root')
)