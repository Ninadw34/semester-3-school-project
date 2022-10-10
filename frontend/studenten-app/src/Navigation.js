import React from "react";
import './css/Navigation.css';
import logo from './css/logo.png';
import {Link} from "react-router-dom"

export default function Navigation(){
    return(
        <nav>
            <div className="navigation">
                <ul>
                    <li><a href="/"><img className="logo" src={logo} alt='logo'/></a></li>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/studentenverenigingen"><li>Studentenverenigingen</li></Link>
                    <Link to="/contact"><li>Studenten Barren</li></Link>
                    <Link to="/admin"><li>Admin</li></Link>
                    <Link to="/login"><li className="loginLink">Login</li></Link>
                </ul>
            </div>
        </nav>
    );
}