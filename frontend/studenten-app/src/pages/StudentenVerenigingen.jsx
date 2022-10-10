import React from "react";
import StudentenVerenigingService from "../service/StudentenVerenigingService";


class StudentenVerenigingen extends React.Component {

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
  render(){
    return (
      <div className="ContentContainer">
        <h1>Studentenverenigingen page</h1>
        <div className="middleContainter">
          <h2>Alle Studenten Verenigingen</h2>
          <table>
            {
              this.state.studentenvereniging.map(
                stv =>
                <tr key={stv.StudentenVerenigingID}>
                  <th>{stv.VerenigingNaam}</th>
                </tr>
              )
            }
            
          </table>
        </div>
      </div>
    );
  };
}
    
export default StudentenVerenigingen;