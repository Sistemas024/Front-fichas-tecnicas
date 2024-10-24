import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Inicializar el hook de navegación

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setError('');
      navigate('/home'); // Redirigir a la pantalla de inicio
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>

        <div className="form-group">
          <label htmlFor="username">Correo Electrónico</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">¡Inicio de sesión exitoso!</p>}

        <button type="submit">Ingresar</button>

        <button 
          type="button" 
          className="register-button" 
          onClick={() => navigate('/register')} // Navegar a la página de registro
        >
          Regístrate
        </button>
      </form>
    </div>
  );
};

export default Login;