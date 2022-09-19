import Navigation from "./Navigation";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Studentenverenigingen from "./pages/StudentenVerenigingen";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import './css/App.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/studentenverenigingen" element={<Studentenverenigingen/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
