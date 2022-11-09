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
      <div className="ContentContainer">
        <h1>Berichten Overzict</h1>
        <div className="middleContainter">
        <Link to="/admin">Ga Terug</Link>
          <table>
            <tr>
              <th>Student ID</th>
              <th>Gebruikersnaam</th>
              <th>Email</th>
              <th>Studentenvereniging</th>
            </tr>
            {
              this.state.student.map(
                studenten =>
                <tr key={studenten.ID}>
                  <th>{studenten.ID}</th>
                  <th>{studenten.Naam}</th>
                  <th>{studenten.Email}</th>
                  <td>{studenten.StudentenVerenigingID.VerenigingNaam}</td>
                  <td><Link to={`/updatestudent/${studenten.ID}`}>Edit</Link></td>
                  <td><button onClick={() => { this.DeleteStudent(studenten.ID) }}>Delete</button></td>
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