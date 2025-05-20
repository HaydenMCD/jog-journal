import "./css/App.css";
import Header from "./components/Header.js";
import Tracker from "./components/Tracker.js";
import KilometerInput from "./components/KilometerInput.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
      <KilometerInput />
      <Tracker />
      </div>

    </div>
  );
}

export default App;
