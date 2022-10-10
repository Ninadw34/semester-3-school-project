import React from "react";
import {Link} from "react-router-dom"

const Admin = () => {
    return (
    
    <div className="ContentContainer">
        <ul>
            <Link to='/adminbar'><li>Barren</li></Link>
            <Link><li>Berichten</li></Link>
            <Link><li>Studenten</li></Link>
            <Link to="/adminstudentenvereniging"><li>StudentenVerenigingen</li></Link>
        </ul>
    </div>
      
    );
  };
    
  export default Admin;