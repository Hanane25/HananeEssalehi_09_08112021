//React
import React, { Component } from "react";

//Assets
import Logo from "../../assets/logo.png"

//Styles
import './index.css'


/**
 * Display the Header of the page 
 * @returns {Component}    Nav top with logo and navigation links
 */
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