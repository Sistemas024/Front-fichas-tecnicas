import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componente/Login';
import Home from './componente/Home'; // Nueva pantalla de inicio
import Register from './componente/Register';
import Consulta from './componente/Consulta';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/consulta" element={<Consulta />} />
      </Routes>
    </Router>
  );
};

export default App;