import React from "react";
import {Link} from "react-router-dom"

const Admin = () => {
    return (
    
    <div className="ContentContainer">
        <div className="middleContainter">
            <ul>
                <Link to='/adminbar'><li>Barren</li></Link>
                <Link to='/adminbericht'><li>Berichten</li></Link>
                <Link><li>Studenten</li></Link>
                <Link to="/adminstudentenvereniging"><li>StudentenVerenigingen</li></Link>
            </ul>
        </div>
    </div>
      
    );
  };
    
  export default Admin;