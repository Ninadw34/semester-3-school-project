import React from "react";
import {Link} from "react-router-dom";
import BarService from "../../../service/BarService";
import '../../../css/Admin.css';

class BarrenAdmin extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      bar:[]
    }
  }


  componentDidMount(){
    BarService.GetAllBarren().then((response) => {
      this.setState({bar: response.data});
    });
  }
  

  DeleteBar = (id) => {
    BarService.DeleteBar(id).then((response) => {
            alert("Bar Verwijderd (Refresh de pagina)");
            this.setState({
                bar: this.state.bar.filter(bar => bar.id !== id)
            });
        }
    );
  };
  
  render(){
    return (
      <div className="adminContainer">
        <h1>Barren Overzict</h1>
        <div className="adminButtons">
          <Link className="link" to="/admin">Ga Terug</Link>
          <Link className="link" to="/addbar">Bar aanmaken</Link>
        </div>
        
        <div className="adminOverzicht">
          <table>
            <tr>
              <th>Bar ID</th>
              <th>Bar naam</th>
              <th>Locatie</th>
              <th>Edit bar</th>
              <th>Delete bar</th>
            </tr>
            {
              this.state.bar.map(
                barren =>
                <tr key={barren.BarID}>
                  <th>{barren.BarID}</th>
                  <td>{barren.BarNaam}</td>
                  <td>{barren.Locatie}</td>
                  <td><Link className="editButton" to={`/updatebar/${barren.BarID}`}>Edit</Link></td>
                  <td><button className="deleteButton" onClick={() => { this.DeleteBar(barren.BarID) }}>Delete</button></td>
                </tr>
              )
            }
            
          </table>

        </div>

      </div>
    );
  };
}
    
  export default BarrenAdmin;