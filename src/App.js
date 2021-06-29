import './App.css';
import Navi from './components/Head/Navbar';
import Home from './components/Body/Content';
import AboutMe from './components/About/AboutMeComponent';
import description from './shared/AboutMeDescription';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Home/>
      <AboutMe description={description.text}/>
    </div>
  );
}

export default App;
