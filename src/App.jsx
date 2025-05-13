import { DistanceProvider } from "./hooks/useDistance";
import "./css/App.css";
import Header from "./components/Header";
import StatsView from "./components/StatComponents/StatsView";
import KilometerInput from "./components/KilometerInput";

function App () {
  return (
    <DistanceProvider>
    <div className="App">
      <Header />
        <div className="wrapper">
          test
        <KilometerInput />
        <StatsView />
      </div>
    </div>
    </DistanceProvider>
  );
}

export default App;
