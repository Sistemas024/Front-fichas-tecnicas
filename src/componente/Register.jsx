import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import '../componente/Register.css'; // Importar CSS específico del registro

const Register = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState(''); // Fecha de nacimiento
  const [cedula, setCedula] = useState(''); // Cédula
  const [email, setEmail] = useState('');
  const [cellular, setCellular] = useState(''); // Celular
  const [city, setCity] = useState(''); // Ciudad
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Inicializar el hook de navegación

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Crear el objeto de usuario
    const newUser = {
      name,
      dob,
      cedula,
      email,
      cellular,
      city,
      password,
    };

    try {
      // Enviar datos al backend
      const response = await fetch('http://localhost:5000/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setSuccess(true);
        setError('');
        // Opcionalmente, redirigir a otra página después del registro
        // navigate('/login');
      } else {
        setError('Error al registrar usuario');
      }
    } catch (error) {
      setError('Error de conexión al servidor');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Registro</h2>

        <div className="form-group">
          <label htmlFor="name">Usuario</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cedula">Cédula</label>
          <input
            type="text"
            id="cedula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">¡Registro exitoso!</p>}

        <button type="submit">Registrarme</button>
        <button 
          type="button" 
          onClick={() => navigate('/')} // Navegar de vuelta al Login
        >
          Volver
        </button>
      </form>
    </div>
  );
};

export default Register;
