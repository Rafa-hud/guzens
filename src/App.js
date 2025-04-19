import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Hire from './pages/Hire';
import './App.css';
// Importamos emailjs (asegúrate de tenerlo instalado)
import emailjs from '@emailjs/browser';

// Inicializamos EmailJS con tus credenciales
emailjs.init("axfeljimenez@gmail.com"); // Reemplaza con tu User ID real

function App() {
  return (
    <Router>
      <div className="App">
        {/* Encabezado (visible en todas las páginas) */}
        <Header />

        {/* Configuración de rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/hire" element={<Hire />} />
          
        </Routes>

        {/* Footer (opcional, si lo deseas) */}
        <footer className="footer">
          <p>© 2023 Guzens "El Imaginante" - Todos los derechos reservados</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;