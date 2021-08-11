import './App.scss';
import Navi from './components/Head/Navbar';
import Projects from './components/Body/Content';
import AboutMe from './components/About/AboutMeComponent';
import SocialBar from './components/SocialMediaBar/SocialBar';
import MainHome from './components/Home/Home';
import SkillsSection from './components/SkillCard/Skills';
import FooterSection from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <SocialBar/>
      <Navi/>
      <MainHome/>
      <AboutMe/>
      <SkillsSection/>
      <Projects/>
      <FooterSection/>
    </div>
  );
}

export default App;
