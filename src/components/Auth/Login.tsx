import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';
import Cookies from 'js-cookie';
import {gapi} from 'gapi-script';
import visibleOn from '../../assets/icons/Eye.svg';
import visibleOff from '../../assets/icons/Eye Closed.svg';
import visibleOnRed from '../../assets/icons/Eye Red.svg';
import visibleOffRed from '../../assets/icons/Eye Closed Red.svg';
import facebook from '../../assets/icons/icon_facebook.svg';
import google from '../../assets/icons/icon_google.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [hasEmailError, setHasEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [hasPasswordError, setHasPasswordError] = useState('');
  const [loader, setLoader] = useState(false); // не знаю на рахунок чи буде якись лоадер на всяк випадок добавив
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(true);

  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setHasEmailError('');
    setHasError(false);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setHasPasswordError('');
    setHasError(false);
  };

  //валідація для полів
  const handleEmailBlur = () => {
    if (
      !email.includes('@') ||
      email[0] === '@' ||
      /[#\$ ]/.test(email) ||
      !email.includes('.') ||
      !/\.[A-Za-z]+$/.test(email)
    ) {
      setHasEmailError('Mail is not correct');
      setHasError(true);
    }
  };

  const handlePasswordBlur = () => {
    if (/\s/.test(password) || /[^\S ]/.test(password)) {
      setHasPasswordError('Enter your password without spaces');
      setHasError(true);
    } else if (password.length === 0) {
      setHasPasswordError('Enter your password');
      setHasError(true);
    } else if (password.length < 8) {
      setHasPasswordError('The password must contain at least 8 characters');
      setHasError(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onFinish = async () => {
    setHasError(false);
    handleEmailBlur();
    handlePasswordBlur();
  
    if (hasError === false) {
      setDisable(true);
  
      const data = {
        email: email,
        password: password,
      };
  
      try {
        setLoader(true);
        const response = await axios.post('http://localhost:8080/auth/login', data, { //вставте потрібне посилання а апішку логіну
          headers: {
            'Content-Type': 'application/json'
          }
        });

        navigate('/після логіну закине куди треба'); // не забудьте змінити
        console.log('Логін успішний:', response);
      } catch (error) {
        setError('An error occurred, please try again!');
        console.error('Login error:', error);
      } finally {
        setLoader(false);
        setDisable(false);
      }
    }
  };

  const handleGoogle = () => {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: "ключ гугла", // сюди вставите ключ дасть бекенд гулла без нього не працюватиме 
        prompt: 'select_account', //параметр prompt на 'select_account тоді можемо вибрати серед акаунтів гугловських'
      }).then(() => {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signIn().then((googleUser: any) => {
          const idToken = googleUser.getAuthResponse().id_token;

          // в фейсбуці такий же запрос як нижче добавити
          axios.post(' http:// на апі берем дані з гугла не забути фото спитати', { //вставте потрібне посилання а апішку гугла
            "auth_token": idToken
          }).then(resp => {
            Cookies.set('access_token', resp.data.tokens.access); //спитаєте бек чи ми працюємо з access і refresh токенами якщо так то ці рядки записані в куки залишите
            Cookies.set('refresh_token', resp.data.tokens.refresh);
            navigate('/account');  //після того як ми авторизувались тут адресу введіть на яку сторінку має перекинути юзера
            console.log(resp);
          });
        }).catch((error: any) => {
          console.error('Помилка авторизації Google:', error);
        });
      });
    });
  }
  
  useEffect(() => {
  
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: 'ВАШ_APP_ID', // Замість ВАШ_APP_ID вставте ваш App ID з Facebook Developer
        cookie: true,
        xfbml: true,
        version: 'v10.0',
      });

      window.FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const handleFBLogin = () => {
    window.FB.login((response: fb.StatusResponse) => {
      if (response.authResponse) {
        console.log('Welcome! Fetching your information.... ');
        window.FB.api('/me', { fields: 'name,email,picture' }, (userInfo) => {
          console.log(userInfo);
          // Тут обробити дані користувача, які повертає Facebook зробити запит на апішку фейсбуку  ліпше гляньте ше документацію так як я не працював з фейсбуком ще лиш з гуглом
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, { scope: 'public_profile,email' });
  };
  
  return (
    <div className='auth__form'>
      <div>
        <h2 className='auth__form-title'>Welcome back</h2>

        <label
          className={classNames('auth__form-label', {
            'auth__form-label--err': hasEmailError,
          })}
          htmlFor="em"
        >
          Email
        </label>

        <div
          className={classNames('auth__form-border', {
            'auth__form-border--err': hasEmailError,
          })}
        >
          <input
            className={classNames('auth__form-input', {
              'auth__form-input--err': hasEmailError,
            })}
            type="text"
            id='em'
            placeholder='Enter your Email'
            autoComplete='off'
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
        </div>

        <div className="auth__form-message">
          {hasEmailError ? (
            <div className='auth__form-error'>
              <span className='auth__form-error-mark'>!</span>
              <p className='auth__form-error-text'>{hasEmailError}</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>

        <label
          className={classNames('auth__form-label', {
            'auth__form-label--err': hasPasswordError,
          })}
          htmlFor="pass"
        >
          Password
        </label>

        <div
          className={classNames('auth__form-border', {
            'auth__form-border--err': hasPasswordError,
          })}
        >
          <input
            className={classNames('auth__form-input', {
              'auth__form-input--err': hasPasswordError,
            })}
            id='pass'
            placeholder='Enter your Password'
            type={showPassword ? 'text' : 'password'}
            name="password"
            maxLength={30}
            value={password}
            onBlur={handlePasswordBlur}
            onChange={handlePasswordChange}
          />

          <button type="button" className="auth__form-visible" onClick={togglePasswordVisibility}>
            {showPassword
              ? <img src={hasPasswordError ? visibleOnRed : visibleOn} alt="видно" />
              : <img src={hasPasswordError ? visibleOffRed : visibleOff} alt="не видно" />
            }
          </button>
        </div>

        <div className="auth__form-message">
          {hasPasswordError ? (
            <div className='auth__form-error'>
              <span className='auth__form-error-mark'>!</span>
              <p className='auth__form-error-text'>{hasPasswordError}</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>

        <Link className='auth__form-question' to='/reset'>
          <p className='auth__form-question'>Forgot password?</p>
        </Link>

        <button
          className='auth__form-logbutton'
          disabled={disable}
          onClick={onFinish}
        >
          Login
        </button>

        <div className="auth__form-message">
          {error ? (
            <div className='auth__form-error'>
              <span className='auth__form-error-mark'>!</span>
              <p className='auth__form-error-text'>{error}</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>

        <div className="auth__form-decor">
          <span className="auth__form-decor-line"></span>
          <span className="auth__form-decor-text">or</span>
          <span className="auth__form-decor-line"></span>
        </div>

        <div className="auth__form-buttons">
          <button className="auth__form-button" onClick={()=>handleGoogle()}>
            <img src={google} alt="google" className="auth__form-button-img" />
            Google
          </button>

          <button className="auth__form-button" onClick={()=> handleFBLogin()}>
            <img src={facebook} alt="facebook" className="auth__form-button-img" />
            Facebook
          </button>
        </div>
      </div>

      <div className="auth__form-box">
        <p className='auth__form-box-text'>Don’t have an account?</p>
        <Link to="/signin" className='auth__form-box-text'>Register</Link>
      </div>
    </div>
  )
}

export default Login;
