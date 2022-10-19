import Navigation from "./Navigation";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Studentenverenigingen from "./pages/StudentenVerenigingen";
import Barren from "./pages/Barren";
import Login from "./pages/Login";
import Profiel from "./pages/Profiel";

import Admin from "./pages/admin/Admin";
import BarrenAdmin from "./pages/admin/bar/BarrenAdmin";
import AddBar from "./pages/admin/bar/AddBar";
import UpdateBar from "./pages/admin/bar/UpdateBar";

import StudentenVerenigingenAdmin from "./pages/admin/studentenvereniging/StudentenVerenigingenAdmin";
import AddStudentenVereniging from "./pages/admin/studentenvereniging/AddStudentenVereniging";
import UpdateStudentenVereniging from "./pages/admin/studentenvereniging/UpdateStudentenVereniging";

import BerichtenAdmin from "./pages/admin/bericht/BerichtenAdmin";
import AddBericht from "./pages/admin/bericht/AddBericht";
import UpdateBericht from "./pages/admin/bericht/UpdateBericht";

import StudentenAdmin from "./pages/admin/student/StudentenAdmin";
import Registreren from "./pages/Registreren";
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
          <Route path="/profiel" element={<Profiel/>}></Route>

          <Route path="/adminbar" element={<BarrenAdmin/>}></Route>
          <Route path="/updatebar/:id" element={<UpdateBar/>}></Route>
          <Route path="/addbar" element={<AddBar/>}></Route>

          <Route path="/adminstudentenvereniging" element={<StudentenVerenigingenAdmin/>}></Route>
          <Route path="/updatestudentenvereniging/:id" element={<UpdateStudentenVereniging/>}></Route>
          <Route path="/addstudentenvereniging" element={<AddStudentenVereniging/>}></Route>

          <Route path="/adminbericht" element={<BerichtenAdmin/>}></Route>
          <Route path="/addbericht" element={<AddBericht/>}></Route>
          <Route path="/updatebericht/:id" element={<UpdateBericht/>}></Route>

          <Route path="/adminstudent" element={<StudentenAdmin/>}></Route>
          <Route path="/registreren" element={<Registreren/>}></Route>
        </Routes>
      
    </>
  );
}

export default App;
