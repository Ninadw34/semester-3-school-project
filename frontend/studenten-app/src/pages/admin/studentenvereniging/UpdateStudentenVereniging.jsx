import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StudentenVerenigingService from "../../../service/StudentenVerenigingService";

const UpdateStudentenVereniging = () => {
  const {id} = useParams();
  const [VerenigingNaam, setStudentenVerenigingNaam] = useState('');
  const [AantalLeden, setAantalleden] = useState('');

  useEffect(() =>{
    async function fetchStudentenVereniging() {
        const { data } = await StudentenVerenigingService.GetStudentenVerenigingByID(id);
        setStudentenVerenigingNaam(data.VerenigingNaam);
        setAantalleden(data.AantalLeden);
    }
    fetchStudentenVereniging()

},[])

const studentenVerenigingNaamChange = (event) => {
    setStudentenVerenigingNaam(event.target.value);
  };

  const aantalLedenChange = (event) => {
    setAantalleden(event.target.value);
  };


  const submitActionHandler = (event) => {
    event.preventDefault();
    StudentenVerenigingService.UpdateStudentenVereniging(id, {
      VerenigingNaam: VerenigingNaam,
        AantalLeden: parseInt(AantalLeden)
      })
      .then((response) => {
        alert("Studentenvereniging "+ VerenigingNaam +" updated!");
      });

  };
    return (
    
    <div className="ContentContainer">
        <form onSubmit={submitActionHandler}>
            <label>Studentenvereniging naam:</label>
            <input type="text" name="barNaam" value={VerenigingNaam} onChange={studentenVerenigingNaamChange}/>
            <label>Aantal leden:</label>
            <input type="text" name="barLocatie" value={AantalLeden} onChange={aantalLedenChange}/>
            <input type="submit" value="Studentenvereniging Aanpassen"/>
        </form>
    </div>
      
    );
  }
    
  export default UpdateStudentenVereniging;