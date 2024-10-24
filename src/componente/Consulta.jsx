import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import './Consulta.css';

const Home = () => {
  const navigate = useNavigate(); // Inicializar el hook de navegación

  const handleLogout = () => {
    navigate('/'); // Redirigir al Login al cerrar sesión
  };

  return (
    <div className="home-container">
      <h1>BIENVENIDOS</h1>
      <div className="pdf-container">
                    <img 
                        src="/images/Carvajal.png" 
                        className="proveedor-image" 
                    />
                    <a 
                        href="/pdf/triggers.pdf" 
                        download="triggers.pdf" 
                        className="download-link"
                        type="document/pdf"
                    >
                        Descargar
                    </a>
                </div>
                <button 
                    type="button" 
                    className="back-button" 
                    onClick={() => navigate('/home')}
                    >
                        Volver a Inicio
                </button>
    </div>




  );
};

export default Home;