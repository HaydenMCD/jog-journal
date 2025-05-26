import './css/App.css';
import Header from './components/Header';
import StatsView from './components/StatComponents/StatsView';
import KilometerInput from './components/KilometerInput';
import { DistanceProvider } from './context/useDistanceProvider';

function App() {
  return (
    <DistanceProvider>
      <div className='App'>
        <Header />
        <div className='wrapper'>
          <KilometerInput />
          <StatsView />
        </div>
      </div>
    </DistanceProvider>
  );
}

export default App;
