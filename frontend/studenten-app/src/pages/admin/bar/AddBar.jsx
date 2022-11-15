import React, {useState} from "react";
import BarService from "../../../service/BarService";
import '../../../css/Admin.css';

const AddBar = () => {
    const [BarNaam, setBarNaam] = useState('');
    const [Locatie, setLocatie] = useState('');

  const barNaamChange = (event) => {
    setBarNaam(event.target.value);
  };

  const locatieChange = (event) => {
    setLocatie(event.target.value);
  };


  const submitActionHandler = (event) => {
    if(!BarNaam || !Locatie){
      alert("Error, vul alle velden in!");
    }
    else{
    event.preventDefault();
    BarService.AddBar({
        BarNaam: BarNaam,
        Locatie: Locatie
      })
      .then((response) => {
        alert("Bar "+ BarNaam +" added!");
      })
    }
  };

    return (
    
      <div className="adminContainer">
        <div className="adminInputfields">
          <form onSubmit={submitActionHandler}>
            <ul>
              <li>
                <label>Bar naam:</label>
              </li>
              <li>
                <input type="text" name="barNaam" value={BarNaam} onChange={barNaamChange}/>
              </li>
              <li>
                <label>Locatie:</label>
              </li>
              <li>
                <input type="text" name="barLocatie" value={Locatie} onChange={locatieChange}/>
              </li>
              <li>
                <input type="submit" value="Bar Aanpassen"/>
              </li>
            </ul>
          </form>
      </div>
    </div>
    );
  };
    
  export default AddBar;