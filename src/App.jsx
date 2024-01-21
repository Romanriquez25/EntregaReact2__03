
import './App.css'
import Navbar from './Navbar'
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from "react-router-dom";
import Home from './Home'
import Pokemones from './Pokemones'

function App() {

  return (
    <>   
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemones" element={<Pokemones />} />      
        <Route path="/Pokemones/:id" element={<Pokemones />} />
        </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default App
