import React from "react";
import StudentService from "../service/StudentService";
import StudentenVerenigingService from "../service/StudentenVerenigingService";

class Registreren extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          ID: '',
          Naam: '',
          Email: '',
          Password: '',  
          StudentenVerenigingID: '',
          studentenvereniging:[],
        }
        this.naamChange = this.naamChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.studentenverenigingChange = this.studentenverenigingChange.bind(this);
        this.submitActionHandler = this.submitActionHandler.bind(this);
      }
      componentDidMount(){
        StudentenVerenigingService.GetAllStudentenVerenigingen().then((response) => {
          this.setState({studentenvereniging: response.data});
        });
      }

      submitActionHandler = (event) => {
        event.preventDefault();
        let student = {Naam: this.state.Naam, Email: this.state.Email, Password: this.state.Password, StudentenVerenigingID: this.state.StudentenVerenigingID}
        console.log(student)
        StudentService.AddStudent(student)
          .then((response) => {
            alert("Account aangemaakt!");
          });
    
      };

      naamChange(event) {
        this.setState({
          Naam: event.target.value
        });
      }
      emailChange(event) {
        this.setState({
          Email: event.target.value
        });
      }
      passwordChange(event) {
        this.setState({
        Password: event.target.value
        });
      }
      studentenverenigingChange(event) {
        this.setState({
          StudentenVerenigingID: event.target.value
        });
      }
  
render(){
    return (
    <>      <div className="ContentContainer">
      <div className="loginContainer">
        <div className="loginMidContainer">
          <h1>Account aanmaken</h1>
          <form onSubmit={this.submitActionHandler}>
            <ul>
                <li><label>Gebruikersnaam</label></li>
                <li><input type="text" name="Gebruikersnaam" value={this.state.Naam} onChange={this.naamChange}/></li>
                <li><label>School email</label></li>
                <li><input type="text" name="Email" value={this.state.Email} onChange={this.emailChange}/></li>
                <li><select onChange={this.studentenverenigingChange}>
                    <option>--- Kies studentenvereniging ---</option>
                {
                  this.state.studentenvereniging.map(
                    stv =>
                    <option value={stv.StudentenVerenigingID}>{stv.VerenigingNaam}</option>
                  )}
                </select>
                </li>
                <li><label>Wachtwoord</label></li>
                <li><input type="password" name="Password" value={this.state.Password} onChange={this.passwordChange}/></li>
                <li><input type="submit" value="Account aanmaken"/></li>
              </ul>
          </form>
        </div>
      </div>
    </div>
      </>
    );
  };
}
export default Registreren;