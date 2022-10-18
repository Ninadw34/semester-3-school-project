import React from "react";
import BerichtService from "../../../service/BerichtService";
import BarService from "../../../service/BarService";
import StudentenVerenigingService from "../../../service/StudentenVerenigingService";

class AddBericht extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          Text: '',
          AantalLikes: '',
          Datum: '',
          StudentenVerenigingID: '',
          BarID: '',
          bar:[],
          studentenvereniging:[],
        }
        this.textChange = this.textChange.bind(this);
        this.aantalLikesChange = this.aantalLikesChange.bind(this);
        this.datumChange = this.datumChange.bind(this);
        this.studentenverenigingChange = this.studentenverenigingChange.bind(this);
        this.barChange = this.barChange.bind(this);
        this.submitActionHandler = this.submitActionHandler.bind(this);
      }
      componentDidMount(){
        StudentenVerenigingService.GetAllStudentenVerenigingen().then((response) => {
          this.setState({studentenvereniging: response.data});
        });
        BarService.GetAllBarren().then((response) => {
            this.setState({bar: response.data});
        })
      }

      submitActionHandler = (event) => {
        event.preventDefault();
        let bericht = {StudentenVerenigingID: this.state.StudentenVerenigingID, BarID: this.state.BarID, Datum: this.state.Datum, Text: this.state.Text, AantalLikes: this.state.AantalLikes}
        console.log(bericht)
        BerichtService.AddBericht(bericht)
          .then((response) => {
            alert("Bericht added!");
          });
    
      };

      textChange(event) {
        this.setState({
          Text: event.target.value
        });
      }
      aantalLikesChange(event) {
        this.setState({
          AantalLikes: event.target.value
        });
      }
      datumChange(event) {
        this.setState({
          Datum: event.target.value
        });
      }
      studentenverenigingChange(event) {
        this.setState({
          StudentenVerenigingID: event.target.value
        });
      }
      barChange(event){
        this.setState({
          BarID: event.target.value
        });
      }


  
render(){
    return (
    
    <div className="ContentContainer">
        <form onSubmit={this.submitActionHandler}>
            <select onChange={this.studentenverenigingChange}>
            {
              this.state.studentenvereniging.map(
                stv =>
                <option value={stv.StudentenVerenigingID}>{stv.VerenigingNaam}</option>
              )}
            </select>
            <select onChange={this.barChange}>
            {
              this.state.bar.map(
                barren =>
                <option value={barren.BarID}>{barren.BarNaam}</option>
              )}
            </select>
            <label>Text bericht</label>
            <textarea name="Text" value={this.state.Text} onChange={this.textChange}/>
            <label>Aantal likes</label>
            <input type="text" name="AantalLikes" value={this.state.AantalLikes} onChange={this.aantalLikesChange}/>
            <label>Datum</label>
            <input type="text" name="Datum" value={this.state.Datum} onChange={this.datumChange}/>
            <input type="submit" value="Bericht toevoegen" />
        </form>
    </div>
      
    );
  };
}
    
  export default AddBericht;