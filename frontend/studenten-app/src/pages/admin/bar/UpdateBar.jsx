import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BarService from "../../../service/BarService";

const UpdateBar = () => {
  const {id} = useParams();
  const [BarNaam, setBarNaam] = useState('');
  const [Locatie, setLocatie] = useState('');

  useEffect(() =>{
    async function fetchBar() {
        const { data } = await BarService.GetBarByID(id);
        setBarNaam(data.BarNaam);
        setLocatie(data.Locatie);
    }
    fetchBar()

},[])

const barNaamChange = (event) => {
  setBarNaam(event.target.value);
};

const locatieChange = (event) => {
  setLocatie(event.target.value);
};


const submitActionHandler = (event) => {
  event.preventDefault();
  BarService.UpdateBar(id, {
      BarNaam: BarNaam,
      Locatie: Locatie
    })
    .then((response) => {
      alert("Bar "+ BarNaam +" updated!");
    });

};
    return (
    
    <div className="ContentContainer">
        <form onSubmit={submitActionHandler}>
            <label>Bar naam:</label>
            <input type="text" name="barNaam" value={BarNaam} onChange={barNaamChange}/>
            <label>Locatie:</label>
            <input type="text" name="barLocatie" value={Locatie} onChange={locatieChange}/>
            <input type="submit" value="Bar Aanpassen"/>
        </form>
    </div>
      
    );
  }
    
  export default UpdateBar;