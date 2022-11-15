import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StudentenVerenigingService from "../../../service/StudentenVerenigingService";
import {Link} from "react-router-dom";

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
    if(!VerenigingNaam || !AantalLeden){
      alert("Error, vul alle velden in!");
    }
    else{
    event.preventDefault();
    StudentenVerenigingService.UpdateStudentenVereniging(id, {
      VerenigingNaam: VerenigingNaam,
        AantalLeden: parseInt(AantalLeden)
      })
      .then((response) => {
        alert("Studentenvereniging "+ VerenigingNaam +" updated!");
      });
    }
  };
    return (
    
      <div className="adminContainer">
      <div className="adminInputfields">
        <form onSubmit={submitActionHandler}>
          <ul>
            <li>
              <label>Studentenvereniging naam:</label>
            </li>
            <li>
              <input type="text" name="studentenVerenigingNaam" value={VerenigingNaam} onChange={studentenVerenigingNaamChange}/>
            </li>
            <li>
              <label>Aantal leden:</label>
            </li>
            <li>
              <input type="text" name="aantalLeden" value={AantalLeden} onChange={aantalLedenChange}/>
            </li>
            <li>
              <input type="submit" value="Studentenvereniging aanpassen"/><Link className="deleteButton" to="/adminstudentenvereniging">Cancel</Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
      
    );
  }
    
  export default UpdateStudentenVereniging;