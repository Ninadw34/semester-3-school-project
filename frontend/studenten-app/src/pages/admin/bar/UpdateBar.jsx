import React from "react";
import BarService from "../../../service/BarService";

class UpdateBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          BarNaam: '',
          Locatie: '',
        }
        this.barNaamChange = this.barNaamChange.bind(this);
        this.locatieChange = this.locatieChange.bind(this);
        this.submitActionHandler = this.submitActionHandler.bind(this);
    }

    componentDidMount(){
    BarService.GetBarByID(this.props.match.params.id).then((response) => {
        console.log(this.props.match.params.id);
        let bar = response.data
        this.setState({BarNaam: bar.BarNaam, 
            Locatie: bar.Locatie});
    });
    }
   barNaamChange = (event) => {
    this.setBarNaam({BarnNaam: event.target.value});
  };

   locatieChange = (event) => {
    this.setLocatie({Locatie: event.target.value});
  };


  submitActionHandler = (event) => {
    event.preventDefault();
    BarService.UpdateBar({
        BarNaam: this.BarNaam,
        Locatie: this.Locatie
      })
      .then((response) => {
        alert("Bar "+ this.BarNaam +" updated!");
      });

  };
render(){
    return (
    
    <div className="ContentContainer">
        <form onSubmit={this.submitActionHandler}>
            <label>Bar naam:</label>
            <input type="text" name="barNaam" value={this.state.BarNaam} onChange={this.barNaamChange}/>
            <label>Locatie:</label>
            <input type="text" name="barLocatie" value={this.state.Locatie} onChange={this.locatieChange}/>
            <input type="submit" value="Bar Aanpassen"/>
        </form>
    </div>
      
    );
  }
}
    
  export default UpdateBar;