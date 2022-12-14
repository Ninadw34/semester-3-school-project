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
        if(!this.state.StudentenVerenigingID || !this.state.BarID || !this.state.Datum || !this.state.AantalLikes || !this.state.Text){
          alert("Error, vul alle velden in!");
        }
        else{
        event.preventDefault();
        let bericht = {StudentenVerenigingID: this.state.StudentenVerenigingID, BarID: this.state.BarID, Datum: this.state.Datum, Text: this.state.Text, AantalLikes: this.state.AantalLikes}
        console.log(bericht)
        BerichtService.AddBericht(bericht)
          .then((response) => {
            alert("Bericht added!");
          });
        }
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
    
      <div className="adminContainer">
        <div className="adminInputfields">
        <form onSubmit={this.submitActionHandler}>
          <ul>
            <li>
              <select onChange={this.studentenverenigingChange}>
              <option>--- Kies studentenvereniging ---</option>
            {
              this.state.studentenvereniging.map(
                stv =>
                <option value={stv.StudentenVerenigingID}>{stv.VerenigingNaam}</option>
              )}
             </select>
            </li>
            <li>
              <select onChange={this.barChange}>
                <option>--- Kies studentenvereniging ---</option>
              {
                this.state.bar.map(
                  barren =>
                  <option value={barren.BarID}>{barren.BarNaam}</option>
                )}
              </select>
            </li>
            <li>
              <label>Text bericht</label>
            </li>
            <li>
              <textarea name="Text" value={this.state.Text} onChange={this.textChange}/>
            </li>
            <li>
              <label>Aantal likes</label>
            </li>
            <li>
              <input type="text" name="AantalLikes" value={this.state.AantalLikes} onChange={this.aantalLikesChange}/>
            </li>
            <li>
              <label>Datum (yyyy-mm-dd)</label>
            </li>
            <li>
              <input type="text" name="Datum" value={this.state.Datum} onChange={this.datumChange}/>
            </li>
            <li>
              <input type="submit" value="Bericht toevoegen" />
            </li>
          </ul>
        </form>
      </div>
    </div>
    );
  };
}
    
  export default AddBericht;