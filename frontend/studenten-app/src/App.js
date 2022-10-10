import Navigation from "./Navigation";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Studentenverenigingen from "./pages/StudentenVerenigingen";
import Barren from "./pages/Barren";
import Login from "./pages/Login";

import Admin from "./pages/admin/Admin";
import BarrenAdmin from "./pages/admin/bar/BarrenAdmin";
import AddBar from "./pages/admin/bar/AddBar";

import StudentenVerenigingenAdmin from "./pages/admin/studentenvereniging/StudentenVerenigingenAdmin";
import AddStudentenVereniging from "./pages/admin/studentenvereniging/AddStudentenVereniging";
import './css/App.css';


function App() {
  return (
    <>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/studentenverenigingen" element={<Studentenverenigingen/>}></Route>
          <Route path="/contact" element={<Barren/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/login" element={<Login/>}></Route>

          <Route path="/adminbar" element={<BarrenAdmin/>}></Route>
          <Route path="/addbar" element={<AddBar/>}></Route>

          <Route path="/adminstudentenvereniging" element={<StudentenVerenigingenAdmin/>}></Route>
          <Route path="/addstudentenvereniging" element={<AddStudentenVereniging/>}></Route>
          
        </Routes>
      
    </>
  );
}

export default App;
