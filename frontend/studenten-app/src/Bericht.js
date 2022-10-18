import React from "react";
import './css/Bericht.css';
import Banner from './css/assets/bar.jpeg';
import BerichtService from "./service/BerichtService";

class Bericht extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        bericht:[]
      }
    }

    componentDidMount = () =>{
        BerichtService.GetAllBerichten().then((response) => {
          this.setState({bericht: response.data});
        });
      };

      render(){
        return(
            <div>
                {
                this.state.bericht.map(berichten =>
                <>
                <React.Fragment key={berichten.BerichtID}>
                <div  className="BerichtenBox">
                  <p>{berichten.Datum.substring(0, 10)}</p>
                <div className="bericht">
                    <img src={Banner} alt="Studentenbar"/>
                    <div className="borderUnderImage"></div>
                    <div className="like">
                        {/* <input id="like" type="checkbox" onClick={Like}/>
                        <span id="likeCounter">0</span> */}
                    </div>
                    <div className="textBox">
                       
                            <h2>Studentenvereniging: {berichten.StudentenVerenigingID.VerenigingNaam}</h2>
                            <p>{berichten.Text}</p>
                            <h3>Facbar: {berichten.BarID.BarNaam}</h3>
                            <p>Test bericht</p>                           
                    </div>
                </div>
            
            </div>
            </React.Fragment>
                </>
                )
                }
            </div>
        );

      };

}

export default Bericht;

// function Like() {
//     const like = document.getElementById("like");   
//     const counter = document.getElementById("likeCounter").innerHTML;
//     let aantal = parseInt(counter);   
    
//     like.addEventListener("change", function(){
//         if(this.checked){
//             aantal = parseInt(counter) + 1;
//             document.getElementById("likeCounter").innerHTML = aantal;    
//         }else if(!this.checked){
//             aantal = parseInt(counter) - 1;
//             document.getElementById("likeCounter").innerHTML = aantal;
//         }
//     });
 
// }