import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Vans from './components/Vans';
import VanDetails from './components/VanDetails';


//Nested Routes
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />         
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />}>
            <Route path=":vanId" element={<VanDetails />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;