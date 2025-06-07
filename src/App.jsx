import React from 'react'
import 'aos/dist/aos.css';
import Header from './pages/Header'
import Herosection from './Components/Herosection'
import Contact from './Components/Contact'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import About from './Components/About';
import projects from './Components/projects';
import Services from './Components/Services';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/herosection' Component={Herosection}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/pro' Component={projects}/>
      <Route path='/services' Component={Services}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App