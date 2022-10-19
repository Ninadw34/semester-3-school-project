import React from "react";
import {Link} from "react-router-dom";
import '../../css/Admin.css';

const Admin = () => {
    return (
    
    <div className="adminContainer">
        <div className="middleContent">
            <ul>
                <Link to='/adminbar'><li>Barren</li></Link>
                <Link to='/adminbericht'><li>Berichten</li></Link>
                <Link to='./adminstudent'><li>Studenten</li></Link>
                <Link to="/adminstudentenvereniging"><li>StudentenVerenigingen</li></Link>
            </ul>
        </div>
    </div>
      
    );
  };
    
  export default Admin;