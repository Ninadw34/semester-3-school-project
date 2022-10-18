import React from "react";
import {Link} from "react-router-dom";
import BarService from "../../../service/BarService";

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
      <div className="ContentContainer">
        <h1>Barren Overzict</h1>
        <div className="middleContainter">
          <table>
            <tr>
              <th>Bar ID</th>
              <th>Bar naam</th>
              <th>Locatie</th>
            </tr>
            {
              this.state.bar.map(
                barren =>
                <tr key={barren.BarID}>
                  <th>{barren.BarID}</th>
                  <th>{barren.BarNaam}</th>
                  <td>{barren.Locatie}</td>
                  <td><Link to={`/updatebar/${barren.BarID}`}>Edit</Link></td>
                  <td><button onClick={() => { this.DeleteBar(barren.BarID) }}>Delete</button></td>
                </tr>
              )
            }
            
          </table>
          <Link to="/addbar">Bar aanmaken</Link>
        </div>
      </div>
    );
  };
}
    
  export default BarrenAdmin;