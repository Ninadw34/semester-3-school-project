import React from "react";
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
          </ul>
        </div>
      </div>
    );
  };
    
  export default Login;