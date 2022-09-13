import React from "react";
import './css/Navigation.css';
import logo from './css/logo.png';

export default function Navigation(){
    return(
        <nav>
            <div className="navigation">
                <ul>
                    <a href='/'><li><img className="logo" src={logo} alt='logo'/></li></a>
                    <a href='/'><li>Home</li></a>
                    <a href='/studentenverenigingen'><li>Studentenverenigingen</li></a>
                    <a href='/contact'><li>Contact</li></a>
                    <a href='/login'><li className="loginLink">Login</li></a>
                </ul>
            </div>
        </nav>
    );
}