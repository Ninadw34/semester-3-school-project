// import React, {useState} from "react";
// import BerichtService from "../../../service/BerichtService";
// import BarService from "../../../service/BarService";
// import StudentenVerenigingService from "../../../service/StudentenVerenigingService";

// const AddBericht = () => {
//     const [Text, setText] = useState('');
//     const [AantalLikes, setAantalLikes] = useState('');
//     const [BarID, setBar] = useState('');
//     const [StudentenVerenigingID, setStudentenVereniging] = useState('');

//   const TextChange = (event) => {
//     setText(event.target.value);
//   };

//   const LikesChange = (event) => {
//     setAantalLikes(event.target.value);
//   };

//   const BarChange = (event) => {
//     setBar(event.target.value);
//   };
//   const StudentenVerenigingChange = (event) => {
//     setStudentenVereniging(event.target.value);
//   };


//   const submitActionHandler = (event) => {
//     event.preventDefault();
//     BerichtService.AddBericht({
//         Text: Text,
//         AantalLikes: parseInt(AantalLikes),
//         BarID: BarID,
//         StudentenVerenigingID: StudentenVerenigingID
//       })
//       .then((response) => {
//         alert("Bericht added!");
//       });

//   };

//     return (
    
//     <div className="ContentContainer">
//         <form onSubmit={submitActionHandler}>
//             <select onChange={StudentenVerenigingChange}>
//                 <option value={StudentenVerenigingID.StudentenVerenigingID}>{StudentenVerenigingID.VerenigingNaam}</option>
//             </select>
//             <select onChange={BarChange}>
                
//                 <option value={BarID.BarID}>{BarID.BarNaam}</option>
                
//             </select>
//             <label>Text bericht</label>
//             <input type="text-area" name="Text" value={Text} onChange={TextChange}/>
//             <label>Aantal likes</label>
//             <input type="text" name="barLocatie" value={AantalLikes} onChange={LikesChange}/>
//             <input type="submit" value="Bar toevoegen"/>
//         </form>
//     </div>
      
//     );
//   };
    
//   export default AddBericht;