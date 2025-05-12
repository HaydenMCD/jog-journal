import { DistanceProvider } from "./hooks/useDistance";
import "./css/App.css";
import Header from "./components/Header.js";
import StatsView from "./components/StatComponents/StatsView.js";
import KilometerInput from "./components/KilometerInput.js";

function App () {
  return (
    <DistanceProvider>
    <div className="App">
      <Header />
      <div className="wrapper">
        <KilometerInput />
        <StatsView />
      </div>
    </div>
    </DistanceProvider>
  );
}

export default App;
