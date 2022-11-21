import React from "react";
import {Link} from "react-router-dom";
import StudentService from "../../../service/StudentService";

class StudentenAdmin extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      student:[]
    }
  }
  componentDidMount(){
    StudentService.GetAllStudenten().then((response) => {
      this.setState({student: response.data});
    });
  }

  DeleteStudent = (id) => {
    StudentService.DeleteStudent(id).then((response) => {
            alert("Student Verwijderd (Refresh de pagina)");
            this.setState({
                student: this.state.student.filter(student => student.id !== id)
            });
        }
    );
  };
  
  render(){
    return (
      <div className="adminContainer">
        <h1>Studenten Overzict</h1>
        <div className="adminButtons">
          <Link className="link" to="/admin">Ga Terug</Link>
        </div>
        
        <div className="adminOverzicht">
          <table>
            <tr>
              <th>Student ID</th>
              <th>Gebruikersnaam</th>
              <th>Email</th>
              <th>Studentenvereniging</th>
              <th>Rol</th>
              <th>Edit student</th>
              <th>Delete student</th>
            </tr>
            {
              this.state.student.map(
                studenten =>
                <tr key={studenten.ID}>
                  <th>{studenten.ID}</th>
                  <td>{studenten.Naam}</td>
                  <td>{studenten.Email}</td>
                  <td>{studenten.StudentenVerenigingID.VerenigingNaam}</td>
                  <td>{studenten.Role}</td>
                  <td><Link className="editButton" to={`/updatestudent/${studenten.ID}`}>Edit</Link></td>
                  <td><button className="deleteButton" onClick={() => { this.DeleteStudent(studenten.ID) }}>Delete</button></td>
                </tr>
              )
            }
            
          </table>
        </div>
      </div>
    );
  };
}
    
  export default StudentenAdmin;