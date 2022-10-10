import React, {useState} from "react";
import BarService from "../../../service/BarService";

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
    event.preventDefault();
    BarService.AddBar({
        BarNaam: BarNaam,
        Locatie: Locatie
      })
      .then((response) => {
        alert("Bar "+ BarNaam +" added!");
      });

  };

    return (
    
    <div className="ContentContainer">
        <form onSubmit={submitActionHandler}>
            <label>Bar naam:</label>
            <input type="text" name="barNaam" value={BarNaam} onChange={barNaamChange}/>
            <label>Locatie:</label>
            <input type="text" name="barLocatie" value={Locatie} onChange={locatieChange}/>
            <input type="submit" value="Bar toevoegen"/>
        </form>
    </div>
      
    );
  };
    
  export default AddBar;