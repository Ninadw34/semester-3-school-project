import React from "react";
import { Link } from "react-router-dom";
import "../css/Main.css";

const Login = () => {
    return (
      <div className="ContentContainer">
        <div className="loginContainer">
          <h1>Login</h1>
          <ul>
            <li><label>Gebruikersnaam:</label></li>
            <li><input type="text" name="gebruikersnaamInput"/></li>
            <li><label>Wachtwoord:</label></li>
            <li><input type="password" name="wachtwoordInput"/></li>
            <li><input type="submit" value="Inloggen"/></li>
            <li><Link to="/registreren">Account aanmaken</Link></li>
          </ul>
        </div>
      </div>
    );
  };
    
  export default Login;