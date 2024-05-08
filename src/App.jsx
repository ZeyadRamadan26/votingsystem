import './App.css';
import image2 from './Images/300.gif'; 
import backgroundImage from './Images/2E-modified.jpg';
import Navbar from './components/Navbar';
import { Routes,Route,Link } from 'react-router-dom';
import React from 'react';
import Landpage from './Pages/Landpage'
import Contact from './components/Contact'
import AboutUs from './Pages/aboutus'
import Howtouse from './Pages/Howtousen'
import Voting from './Pages/votingmain'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Test from './Pages/test'
import Signup from './components/Signup';
import VotingResults from './Pages/results';
function App() {
  return( 
    <div className='relative h-screen overflow-hidden'>
        
    <div className="absolute max-h-screen -z-10  bg-cover brightness-50 w-full ">
      <img src={backgroundImage}></img>
    </div>
    <Routes>
        <Route path="/" element={<Landpage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Howtousen" element={<Howtouse />} />
        <Route path="/votingmain" element={<Voting />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/results" element={<VotingResults />} />
    </Routes>
    </div>
   );
}
export default App;