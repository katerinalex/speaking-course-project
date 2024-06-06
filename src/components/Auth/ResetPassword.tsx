import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [hasEmailError, setHasEmailError] = useState('');
  const [loader, setLoader] = useState(false);
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState('');
  const [hasError, setHasError] = useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setHasEmailError('');
    setHasError(false);
  };

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

  const onFinish = async () => {
    setHasError(false);
    handleEmailBlur();
  
    if (hasError === false) {
      setDisable(true);
  
      const data = {
        email: email,
      };
  
      try {
        setLoader(true);
        const response = await axios.post('http://localhost:8080/reset?', data, { //вказати правильний запрос
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log('Запит відправлено:', response);
      } catch (error) {
        setError('An error occurred, please try again!');
        console.error('Login error:', error);
      } finally {
        setLoader(false);
        setDisable(false);
      }
    }
  };

  return (
    <div className='auth__form'>
      <div>
        <h2 className='auth__form-title'>Password reset</h2>

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

        <button
          className='auth__form-logbutton-reset'
          disabled={disable}
          onClick={onFinish}
        >
          Send
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

        <p className="auth__form-restext">
          Follow the link in the email to access your personal account.
        </p>

        <div className="auth__form-box-reset">
          <p className='auth__form-box-text'>Didn’t receive the letter? </p>
          <p className='auth__form-box-text-right' onClick={()=> onFinish()}>
            Send again
          </p>
        </div>
      </div>

      <div className="auth__form-box">
        <p className='auth__form-box-text'>Don’t have an account?</p>
        <Link to="/signin" className='auth__form-box-text'>Register</Link>
      </div>
    </div>
  )
}

export default ResetPassword
