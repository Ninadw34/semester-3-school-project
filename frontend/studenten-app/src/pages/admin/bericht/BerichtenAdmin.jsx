import React from "react";
import {Link} from "react-router-dom";
import BerichtService from "../../../service/BerichtService";

class BerichtenAdmin extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bericht:[]
    }
  }
  componentDidMount(){
    BerichtService.GetAllBerichten().then((response) => {
      this.setState({bericht: response.data});
    });
  }

  DeleteBericht = (id) => {
    BerichtService.DeleteBericht(id).then((response) => {
            alert("Bericht Verwijderd (Refresh de pagina)");
            this.setState({
                bericht: this.state.bericht.filter(bericht => bericht.id !== id)
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
              <th>Bericht ID</th>
              <th>Studentenvereniging naam</th>
              <th>Bar naam</th>
              <th>Text</th>
              <th>Aantal likes</th>
            </tr>
            {
              this.state.bericht.map(
                berichten =>
                <tr key={berichten.BerichtID}>
                  <th>{berichten.BerichtID}</th>
                  <th>{berichten.StudentenVerenigingID.VerenigingNaam}</th>
                  <td>{berichten.BarID.BarNaam}</td>
                  <td>{berichten.Text}</td>
                  <td>{berichten.AantalLikes}</td>
                  <td><Link to={`/updatebericht/${berichten.BerichtID}`}>Edit</Link></td>
                  <td><button onClick={() => { this.DeleteBericht(berichten.BerichtID) }}>Delete</button></td>
                </tr>
              )
            }
            
          </table>
          <Link to="/addbericht">Bericht aanmaken</Link>
        </div>
      </div>
    );
  };
}
    
  export default BerichtenAdmin;