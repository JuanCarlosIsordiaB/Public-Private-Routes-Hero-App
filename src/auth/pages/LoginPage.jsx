
import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const LoginPage = () => {

  const {login} = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    login('Juan Carlos ');

    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className="container mt-5">
      <div className="form-container">
        <div className="logo-container">
          Log In
        </div>

        <form className="form">
          <div className="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Enter your email" required=""/>
          </div>
          <div className="form-group">
            <label for="email">Password.</label>
            <input type="text" id="password" name="password" placeholder="Enter your password" required=""/>
          </div>

          <button 
            className="form-submit-btn" type="submit"
            onClick={ onLogin }
            
          >Login</button>
        </form>

        <p className="signup-link">
          Don't have an account?
          <a href="" className="signup-link link"> Sign up now</a>
        </p>
      </div>
    </div>

  )
}

export default LoginPage