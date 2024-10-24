import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Inicializar el hook de navegación

  const handleLogout = () => {
    navigate('/'); // Redirigir al Login al cerrar sesión
  };

  return (
    <div className="home-container">
      <h1>FICHAS TECNICAS PROVEEDORES</h1>
      <p>Esta es la página principal después del inicio de sesión exitoso.</p>
      <div className="pdf-container">
                    <img 
                        src="/images/Carvajal.png" 
                        className="proveedor-image" 
                    />
                    <a
                        type="button"
                        onClick={() => navigate('/Consulta')}
                    >
                        Consultar
                    </a>
                </div>
      <button className="logout-button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Home;