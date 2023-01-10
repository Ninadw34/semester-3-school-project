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
    if(!Datum || !AantalLikes || !Text){
      alert("Error, vul alle velden in!");
    }
    else{
    event.preventDefault();
    BerichtService.UpdateBericht(id, {
      Text: Text,
        AantalLikes: parseInt(AantalLikes),
        Datum: Datum
      })
      .then((response) => {
        alert("Bericht updated!");
      });
    }
  };
    return (
    
      <div className="adminContainer">
        <div className="adminInputfields">
          <form onSubmit={submitActionHandler}>
            <ul>
              <li>
                <label>Text bericht</label></li>
              <li>
                <textarea name="Text" value={Text} onChange={textChange}/>
              </li>
              <li>
                <label>Aantal likes</label>
              </li>
              <li>
                <input type="text" name="AantalLikes" value={AantalLikes} onChange={aantalLikesChange}/>
              </li>
              <li>
                <label>Datum</label>
              </li>
              <li>
                <input type="text" name="Datum" value={Datum} onChange={datumChange}/>
              </li>
              <li>
                <input type="submit" value="Bericht aanpassen" />
              </li>
            </ul>   
          </form>
        </div>
    </div>
      
    );
  }
    
  export default UpdateStudentenVereniging;