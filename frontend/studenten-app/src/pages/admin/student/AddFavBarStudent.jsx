import React from "react";
import StudentService from "../../../service/StudentService";
import BarService from "../../../service/BarService";

const AddFavBarStudent = () => {
    const {id} = useParams();
    const [BarID, setBar] = useState('');
  
    useEffect(() =>{
      async function fetchStudent() {
          const { data } = await StudentService.GetStudentByID(id);
          setBar(data.setBar);
      }
      fetchStudent()
  
  },[])
  
    const barChange = (event) => {
        setBar(event.target.value);
    };
  
  
    const submitActionHandler = (event) => {
      if(!this.BarID){
        alert("Error, vul alle velden in!");
      }
      else{
      event.preventDefault();
      BerichtService.UpdateBericht(id, {
          BarID: BarID
        })
        .then((response) => {
          alert("Bericht updated!");
        });
      }
    };
      return (
      
        <div className="adminContainer">
          <div className="adminInputfields">
            <form onSubmit={submitActionHandler}>
              <ul>
                <li>
                  <label>Text bericht</label></li>
                <li>
                  <textarea name="Text" value={Text} onChange={textChange}/>
                </li>
                <li>
                  <label>Aantal likes</label>
                </li>
                <li>
                  <input type="text" name="AantalLikes" value={AantalLikes} onChange={aantalLikesChange}/>
                </li>
                <li>
                  <label>Datum</label>
                </li>
                <li>
                  <input type="text" name="Datum" value={Datum} onChange={datumChange}/>
                </li>
                <li>
                  <input type="submit" value="Bericht aanpassen" />
                </li>
              </ul>   
            </form>
          </div>
      </div>
        
      );
    }
      
    export default AddFavBarStudent;