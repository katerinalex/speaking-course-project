import React from 'react';
import { Link } from 'react-router-dom';
import '../../r-style/AuthPage.scss';
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
        </div>
      </div>
      
    </div>
  )
}

export default AuthPage;
