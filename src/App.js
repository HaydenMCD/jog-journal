import "./css/App.css";
import Header from "./components/Header.js";
import StatsView from "./components/StatComponents/StatsView.js";
import KilometerInput from "./components/KilometerInput.js";
import Login from "./components/Login.jsx";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <div className="wrapper">
        <KilometerInput />
        <StatsView />
      </div> */}
      <Login />
    </div>
  );
}

export default App;
