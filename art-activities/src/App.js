import './App.css';
import Title from './components/Title/Title';
import Search from './components/Search/Search';
import Activities from './components/Activities/Activities';
import ActivityCard from './components/ActivityCard/ActivityCard';

function App() {
  return (
    <div className="App">
      <Title />
      <Search />
      <Activities />
    </div>
  );
}

export default App;
