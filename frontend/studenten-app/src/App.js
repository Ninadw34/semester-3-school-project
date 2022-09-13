import Navigation from "./Navigation";
import Bericht from "./Bericht";
import './css/App.css';

function App() {
  return (
    <>
      <Navigation/>
      <div className="ContentContainer">
        <Bericht/>
      </div>
    </>
  );
}

export default App;
