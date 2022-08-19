import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Components/Landing_Page/LandingPage.jsx'
import About from './Components/About_Us/About.jsx'
import Home from './Components/Home/Home.jsx'
import Filters from './Components/Filters/Filters';
import NavBar from './Components/Nav_bar/Nav_bar';
import GameDetail from './Components/Game_Details/GameDetails.jsx'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/about' element={<About/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/games' element={<Filters/>}/>
        <Route path='/home/games/:id' element={<GameDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
