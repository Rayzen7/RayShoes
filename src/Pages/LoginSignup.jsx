import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom'; // Mengimpor useNavigate dari react-router-dom

export const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User berhasil login:', userCredential.user);
      setLoggedIn(true);
    } catch (error) {
      setError(error.message);
      console.error('Error saat login:', error);
    }
  };

  if (loggedIn) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="loginsignup-fields">
            <input type='email' placeholder='Email Address' required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            <div>
              <button type='submit'>Login</button>
              {error && <p className="error-message">{error}</p>}
              <p className="loginsignup-login">Don't have an account? <span>Sign Up Here</span></p>
              <div className="loginsignup-agree">
                <input type='checkbox' name='' id='' required/>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
