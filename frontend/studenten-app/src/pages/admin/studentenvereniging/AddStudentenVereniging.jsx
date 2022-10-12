import React, {useState} from "react";
import StudentenVerenigingService from "../../../service/StudentenVerenigingService";

const AddStudentenVereniging = () => {
    const [VerenigingNaam, setStudentenVerenigingNaam] = useState('');
    const [AantalLeden, setAantalleden] = useState('');


  const studentenVerenigingNaamChange = (event) => {
    setStudentenVerenigingNaam(event.target.value);
  };

  const aantalLedenChange = (event) => {
    setAantalleden(event.target.value);
  };


  const submitActionHandler = (event) => {
    event.preventDefault();
    StudentenVerenigingService.AddStudentenVereniging({
      VerenigingNaam: VerenigingNaam,
        AantalLeden: parseInt(AantalLeden)
      })
      .then((response) => {
        alert("Studentenvereniging "+ VerenigingNaam +" added!");
      });

  };

    return (
    
    <div className="ContentContainer">
        <form onSubmit={submitActionHandler}>
            <label>Studentenvereniging naam:</label>
            <input type="text" name="studentenVerenigingNaam" value={VerenigingNaam} onChange={studentenVerenigingNaamChange}/>
            <label>Aantal leden:</label>
            <input type="text" name="aantalLeden" value={AantalLeden} onChange={aantalLedenChange}/>
            <input type="submit" value="Studentenvereniging toevoegen"/>
        </form>
    </div>
      
    );
  };
    
  export default AddStudentenVereniging;