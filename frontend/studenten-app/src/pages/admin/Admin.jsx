import React from "react";
import {Link} from "react-router-dom";
import '../../css/Admin.css';

const Admin = () => {
    return (
    
    <div className="adminContainer">
        <div className="dashboardAdmin">
            <div className="linksDashboard">
                <ul>
                    <Link className="link" to='/adminbar'><li>Barren</li></Link>
                    <Link className="link" to='/adminbericht'><li>Berichten</li></Link>
                    <Link className="link" to='/adminstudent'><li>Studenten</li></Link>
                    <Link className="link" to="/adminstudentenvereniging"><li>StudentenVerenigingen</li></Link>
                </ul>
            </div>
        </div>
    </div>
      
    );
  };
    
  export default Admin;