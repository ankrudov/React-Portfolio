import React, { Component } from 'react';
import './App.scss';
import Navi from './components/Head/Navbar';
import Projects from './components/Body/Content';
import AboutMe from './components/About/AboutMeComponent';
import SocialBar from './components/SocialMediaBar/SocialBar';
import MainHome from './components/Home/Home';
import SkillsSection from './components/SkillCard/Skills';
import FooterSection from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'; 

class App extends Component{
  render(){
    return (
      <div className="App">
        <Router>
          <SocialBar/>
          <Navi/>
          <Switch>
            <Route path='/home' component={MainHome}/>
            <Route path='/about' component={AboutMe}/>
            <Route path='/skills' component={SkillsSection}/>
            <Route path='/projects' component={Projects}/>
          </Switch>
          <FooterSection/>
        </Router>
      </div>
    );
  }
}

export default App;
