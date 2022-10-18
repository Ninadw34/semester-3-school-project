import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BerichtService from "../../../service/BerichtService";

const UpdateStudentenVereniging = () => {
  const {id} = useParams();
  const [Text, setText] = useState('');
  const [AantalLikes, setAantalLikes] = useState('');
  const [Datum, setDatum] = useState('');

  useEffect(() =>{
    async function fetchBericht() {
        const { data } = await BerichtService.GetBerichtByID(id);
        setText(data.Text);
        setAantalLikes(data.AantalLikes);
        setDatum(data.Datum);
    }
    fetchBericht()

},[])

const textChange = (event) => {
    setText(event.target.value);
  };
  const aantalLikesChange = (event) => {
    setAantalLikes(event.target.value);
  };
  const datumChange = (event) => {
    setDatum(event.target.value);
  };


  const submitActionHandler = (event) => {
    event.preventDefault();
    BerichtService.UpdateBericht(id, {
      Text: Text,
        AantalLikes: parseInt(AantalLikes),
        Datum: Datum
      })
      .then((response) => {
        alert("Bericht updated!");
      });

  };
    return (
    
    <div className="ContentContainer">
        <form onSubmit={submitActionHandler}>
            <label>Text bericht</label>
            <textarea name="Text" value={Text} onChange={textChange}/>
            <label>Aantal likes</label>
            <input type="text" name="AantalLikes" value={AantalLikes} onChange={aantalLikesChange}/>
            <label>Datum</label>
            <input type="text" name="Datum" value={Datum} onChange={datumChange}/>
            <input type="submit" value="Bericht aanpassen" />
        </form>
    </div>
      
    );
  }
    
  export default UpdateStudentenVereniging;