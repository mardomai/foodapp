import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Dish from './pages/Dish';
import Dish2 from './pages/Dish2';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/dish" element={<Dish />} />
        <Route path="/dish2" element={<Dish2 />} />
      </Routes>
    </Router>
  );
}

export default App;
