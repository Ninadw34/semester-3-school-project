import React from "react";

class Registreren extends React.Component{
    render(){
        return(
        <div className="mainContainer">
            <div className="registerContainer">
                <h1>Registreren</h1>
                <div className="inputFields">
                    <label>Gebruikersnaam:</label>
                    <input type="text" name="gebruikersnaamField"/>
                    <label>School email:</label>
                    <input type="text" name="emailField"/>
                    <select>
                        <option>Studentenverenigingen</option>
                    </select>
                    <label>Wachtwoord</label>
                    <input type="password" name="passwordField"/>
                    <label>Herhaal wachtwoord</label>
                    <input type="password" name="passwordField"/>
                    <input type="submit" value="Registreren"/>
                </div>
            </div>
        </div>
        )
    }
}
export default Registreren;