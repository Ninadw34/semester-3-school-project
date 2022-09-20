import React from "react";
import './css/Navigation.css';
import logo from './css/logo.png';

export default function Footer(){
    return(
        <>
        <footer>
            <div className="footer">
                <ul>
                    <li id="logo-list"><a href="/"><img className="logo-footer" src={logo} alt='logo'/></a></li>
                </ul>
                <ul>
                    <li>Social media:</li>
                    <li>Insta</li>
                    <li>Facebook</li>
                    <li><a href="https://www.kuleuven.be/" target="blank_">KULeuven website</a></li>
                </ul>
            </div>
        </footer>
        <div className="mini-footer">
                <p>Made by: Nina de Weerd 2022</p>
            </div>
        </>
    );
}