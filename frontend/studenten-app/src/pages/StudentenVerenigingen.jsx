import React, {Component} from "react";


class StudentenVerenigingen extends React.Component {

  constructor(){
    super();
    this.state = {
      msg: "Test"
    }
  };
  render(){
    return (
      <div className="ContentContainer">
        <h1>Studentenverenigingen page</h1>
        <div className="middleContainter">
          <h2>Alle Studenten Verenigingen</h2>
        </div>
      </div>
    );
  };
}
    
  export default StudentenVerenigingen;