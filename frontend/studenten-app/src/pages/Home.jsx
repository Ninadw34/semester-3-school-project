import React from "react";
import Bericht from "../Bericht";
import "../css/Bericht.css"

const Home = () => {
    return (
      <div className="ContentContainer">
        <h1>Studenten App</h1>
        <div className="chatroomLink">
          <a href="http://localhost:3001">Join onze chatroom!</a>
        </div>
        <Bericht/>
      </div>
    );
  };
    
  export default Home;