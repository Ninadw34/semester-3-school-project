import React from "react";
import '../css/Main.css';
import BarService from "../service/BarService";

class Barren extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bar:[]
    }
  }
  componentDidMount(){
    BarService.GetAllBarren().then((response) => {
      this.setState({bar: response.data});
    });
  }
  render(){
    return (
      <div className="ContentContainer">
        <h1>Barren page</h1>
        <div className="middleContainter">
          <h2>Alle Studenten barren</h2>
          <table>
            {
              this.state.bar.map(
                barren =>
                <tr key={barren.BarID}>
                  <th>{barren.BarNaam}</th>
                </tr>
              )
            }
            
          </table>
        </div>
      </div>
    );
  };
}
    
  export default Barren;