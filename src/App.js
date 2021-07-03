import './App.scss';
import Navi from './components/Head/Navbar';
import Home from './components/Body/Content';
import AboutMe from './components/About/AboutMeComponent';
import description from './shared/AboutMeDescription';
import MainHome from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navi/>
      <MainHome/>
    </div>
  );
}

export default App;
