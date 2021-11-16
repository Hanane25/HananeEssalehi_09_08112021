import React from "react";
import { Component } from "react";
import Logo from "../../assets/logo.png"
import './index.css'


class Header extends Component {
    render() {
        return (
            <nav className='header'>
                <ul className='navigation'>
                    <li>
                        <img src={Logo} alt="" className='logo' />
                    </li>
                    <li>
                        Acceuil
                    </li>
                    <li>
                        Profil
                    </li>
                    <li>
                        Réglage
                    </li>
                    <li>
                        Communauté
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header