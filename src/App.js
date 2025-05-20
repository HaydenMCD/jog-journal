import "./css/App.css";
import Header from "./components/Header.js";
import StatsView from "./components/StatComponents/StatsView.js";
import KilometerInput from "./components/KilometerInput.js";
import SignUp from "./components/SignUp.js";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <div className="wrapper">
        <KilometerInput />
        <StatsView />
      </div> */}
      <SignUp />
    </div>
  );
}

export default App;
