import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Auth.scss';
import Logo from "../../assets/icons/Logo.svg";

type Props = {
  page: React.ReactNode;
}

const AuthPage: React.FC<Props> = ({page}) => {
  return (
    <div className='auth'>
      <div className='auth__header'>
        <Link to="/">
          <img src={Logo} alt="Logo" className='auth__header-logo'/>
        </Link>
      </div>
      <div className='auth__container'>
        {page}

        <div className='auth__info'>
          <div>
            <h3 className='auth__info-text auth__info-h3 '>Public Speaking</h3>
            <h4 className='auth__info-text auth__info-h4 '>сourses</h4>
            <p className='auth__info-text auth__info-p '>
              Increase your emotional and social competence
              by honing your communication skills and structure
              your day for greater productivity and satisfaction. 
            </p>
          </div>
          
          <h5 className='auth__info-text auth__info-h5 '>Join us and get to know your best self!</h5>
        </div>
      </div>
      
    </div>
  )
}

export default AuthPage;
