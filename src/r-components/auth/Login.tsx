import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import visibleOn from '../../assets/icons/visibility_on.svg';
import visibleOff from '../../assets/icons/visibility_off.svg';
import classNames from 'classnames';

const Login = () => {
  const [email, setEmail] = useState('');
  const [hasEmailError, setHasEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [hasPasswordError, setHasPasswordError] = useState('');

  const [loader, setLoader] = useState(false);
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  let hasError = false;
  const navigate = useNavigate();

  const startsWithCapitalLetter = (str: string) => {
    return str[0] === str[0].toUpperCase();
  };


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    setHasEmailError('');
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    setHasPasswordError('');
  };
  
  const handleEmailBlur = () => {
    if (
      !email.includes('@') 
      || email[0] === '@' 
      || /[#\$ ]/.test(email) 
      || !email.includes('.') 
      || !/\.[A-Za-z]+$/.test(email)
    ) {
      setHasEmailError('Введіть коректну адресу електронної пошти');
      hasError = true;
    }
  };
  
  const handlePasswordBlur = () => {
    if (/\s/.test(password) || /[^\S ]/.test(password)) {
      setHasPasswordError('Введіть пароль без пробілів');
      hasError = true;
    } else if (password.length === 0) {
      setHasPasswordError('Введіть пароль');
      hasError = true;
    } else if (password.length < 8) {
      setHasPasswordError('Пароль повинен містити не менше 8 символів');
      hasError = true;
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className='auth__form'>
      <h2 className='auth__form-title'>Welcome back</h2>

      <label className='auth__form-label' htmlFor="em">Emaill</label>
      <div className='auth__form-border'>
        <input 
          className='auth__form-input' 
          type="text" 
          id='em' 
          placeholder='Enter yoyr Email'
          autoComplete='off'
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
      </div>

      <div className="auth__form-message">
        {hasEmailError ? (
          <p className='auth__form-error'>{hasEmailError}</p>
        ) : (
          <p className='auth__form-noerror'></p>
        )}
      </div>



      <label className='auth__form-label' htmlFor="pass">Password</label>
      <div className='auth__form-border'>
        <input 
          className='auth__form-input' 
          id='pass' 
          placeholder='Enter yoyr Password'
          type={showPassword ? 'text' : 'password'} 
          name="password" 
          maxLength={30}
          value={password}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
        />

        <button type="button" className="auth__form-visible" onClick={togglePasswordVisibility}>
          {showPassword 
            ? <img src={visibleOn} alt="видно" />
            : <img src={visibleOff} alt="не видно" />
          }
        </button>
      </div>

      <div className="auth__form-message">
        {hasPasswordError ? (
          <p className='auth__form-error'>{hasPasswordError}</p>
        ) : (
          <p className='auth__form-noerror'></p>
        )}
      </div>
      
      <Link className='auth__form-question' to='/'>Forgot password?</Link>

      <button 
        className='auth__form-label'
      >
        Login
      </button>

      <div className="auth__form-decor">
        <span className="auth__form-decor-line"></span>
        <span className="auth__form-decor-text">or</span>
        <span className="auth__form-decor-line"></span>
      </div>

      <div className="auth__form-buttons">
        <button
          className="auth__form-button"
        >
          Google
        </button>

        <button
          className="auth__form-button"
        >
          Facebook
        </button>
      </div>

      <div className="auth__form-box">
        <p className="auth__form-box">Don’t have an account?</p>
        <Link to="/signin" className="auth__form-box">Register</Link>
      </div>
    </div>
  )
}

export default Login
