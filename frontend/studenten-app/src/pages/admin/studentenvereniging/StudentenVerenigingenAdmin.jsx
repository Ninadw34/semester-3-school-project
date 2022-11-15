import React from "react";
import StudentenVerenigingService from "../../../service/StudentenVerenigingService";
import {Link} from "react-router-dom";

class StudentenVerenigingenAdmin extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      studentenvereniging:[]
    }
  }
  componentDidMount(){
    StudentenVerenigingService.GetAllStudentenVerenigingen().then((response) => {
      this.setState({studentenvereniging: response.data});
    });
  }

  DeleteStudentenVereniging = (id) => {
    StudentenVerenigingService.DeleteStudentenVereniging(id).then((response) => {
            alert("Studentenvereniging Verwijderd (Refresh de pagina)");
            this.setState({
              studentenvereniging: this.state.studentenvereniging.filter(studentenvereniging => studentenvereniging.id !== id)
            });
        }
    );
  };

  render(){
    return (
      <div className="adminContainer">
        <h1>Studentenverenigingen Overzict</h1>
        <div className="adminButtons">
          <Link className="link" to="/admin">Ga Terug</Link>
          <Link className="link" to="/addstudentenvereniging">Studentenvereniging aanmaken</Link>
        </div>
        
        <div className="adminOverzicht">
          <table>
          <tr>
              <th>Studentenvereniging ID</th>
              <th>Studentenvereniging naam</th>
              <th>Aantal leden</th>
              <th>Edit studentenvereniging</th>
              <th>Delete studentenvereniging</th>
            </tr>
            {
              this.state.studentenvereniging.map(
                stv =>
                <tr key={stv.StudentenVerenigingID}>
                  <th>{stv.StudentenVerenigingID}</th>
                  <th>{stv.VerenigingNaam}</th>
                  <td>{stv.AantalLeden}</td>
                  <td><Link className="editButton" to={`/updatestudentenvereniging/${stv.StudentenVerenigingID}`}>Edit</Link></td>
                  <td><button className="deleteButton" onClick={() => { this.DeleteStudentenVereniging(stv.StudentenVerenigingID) }}>Delete</button></td>
                </tr>
              )
            }
            
          </table>
          
        </div>
      </div>
    );
  };
}
    
export default StudentenVerenigingenAdmin;