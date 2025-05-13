import { DistanceProvider } from './hooks/useDistanceProvider';
import './css/App.css';
import Header from './components/Header';
import StatsView from './components/StatComponents/StatsView';
import KilometerInput from './components/KilometerInput';

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
