import "./css/App.css";
import Header from "./components/Header.js";
import StatsView from "./components/StatsView.js";
import KilometerInput from "./components/KilometerInput.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <KilometerInput />
        <StatsView />
      </div>
    </div>
  );
}

export default App;
