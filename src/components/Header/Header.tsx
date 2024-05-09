import './Header.scss';
import '../../styles/page.scss';
import { NavLink, useLocation } from "react-router-dom";
import { useState } from 'react';

export const Header = () => {
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleActiveMenu = () => {
    setIsActive(!isActive);
  }

  const handleSecondActiveMenu = () => {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <>
    <header className="header">
      {/* <ul className='header__list_mobile header__list'>

      </ul> */}
      <img
        src='images/hamburger-menu.svg'
        className='header__icon__menu'
        onClick={handleActiveMenu}
      />
      {isActive && <div className='header__menu'>
        <ul className='header__menu__list'>
          <li className='header__menu__item header__link'>
            <img src='images/hat-img.svg' />
            <NavLink to='/' className='header__menu__link'>
              Home
            </NavLink>
          </li>
          <li className='header__menu__item header__link'>
            <img src='images/profile-img.svg' />
            {/* <NavLink to={'/'}> */}
              Courses
           {/* </NavLink> */}
          </li>
          <li className='header__menu__item header__link'>
            {/* <NavLink to={'/'}> */}
              Blog
            {/* </NavLink> */}
          </li>
          <li className='header__menu__item header__link'>
            <img src='images/bell-img.svg' />
            {/* <NavLink to={'/'}> */}
              Success
            {/* </NavLink> */}
          </li>
        </ul>
        <NavLink to={'/'} className="header__menu-logout">
          Log out
        </NavLink>
      </div>}
      <div className='header-logo__main-container'>
        <img src="images/logo-img.svg" className='header-logo' />
        <div className='header-tablet__menu-container'>
        <h2
          className='header-tablet__menu'
          onClick={handleSecondActiveMenu}
        >
          Menu
        </h2>
        {isMenuActive && <ul className='header-tablet__menu__list'>
          <li>
            <input className='header-tablet__menu__search' placeholder='Search'></input>
          </li>
          <li className='header-tablet__menu__item header__link'>
            <NavLink to='/' className='header__menu__link'>
              Home
            </NavLink>
          </li>
          <li className='header-tablet__menu__item header__link'>
            {/* <NavLink to={'/'}> */}
              Courses
           {/* </NavLink> */}
          </li>
          <li className='header-tablet__menu__item header__link'>
            {/* <NavLink to={'/'}> */}
              Blog
            {/* </NavLink> */}
          </li>
          <li className='header-tablet__menu__item header__link'>
            {/* <NavLink to={'/'}> */}
              Success
            {/* </NavLink> */}
          </li>
          <li className='header-tablet__menu__item-logo__main-container'>
            <div className='header-tablet__menu__item-logo-container'>
              <img src="images/telegram-logo.svg"/>
              <img src="images/instagram.svg"/>
            </div>
            <button className='header__button-language'>
              <img src="images/language-logo.svg" className='header__button-language-img' />
              <h1>UA</h1>
           </button>
          </li>
        </ul>}
        </div>
      </div>
      <img src='images/avatar-template.svg' className='header-avatar' />
      <ul className="header__list">
        <li className="header__item header__link">
          <NavLink to='/'>
            Home
          </NavLink>
        </li>
        <li className="header__item header__link">
          {/* <NavLink to={'/'}> */}
            Courses
          {/* </NavLink> */}
        </li>
        <li className="header__item header__link">
          {/* <NavLink to={'/'}> */}
            Blog
          {/* </NavLink> */}
        </li>
        <li className="header__item header__link">
          {/* <NavLink to={'/'}> */}
            Success
          {/* </NavLink> */}
        </li>
      </ul>
      <input className='header__search' ></input>
      <div className='header-logo-container'>
        <ul className="header-logo__list">
          <li className="header__link header-logo__item">
            <img src="images/telegram-logo.svg"/>
          </li>
          <li className="header__link header-logo__item">
            <img src="images/instagram.svg"/>
          </li>
        </ul>
        <button className='header__button-language'>
          <img src="images/language-logo.svg" className='header__button-language-img' />
          <h1>UA</h1>
        </button>
        <h2 className='header__button-log'>Log in</h2>
      </div>
      <div className='header__button-log-container'>
        <h2 className='header__button-log header__button-log-mobile'>Log in</h2>
        <button className="page__button header__button">
          Sign up
        </button>
      </div>
    </header>
    {location.pathname === '/' && <div className="home">
      <div className="home__header">
        <div className='home__header__title__main-container'>
          <div className='home__header__title-container'>
            <h1 className='page__title home__header__title'>Author courses</h1>
            <h1 className='home__header__title-active'>of Anastasiia Shkiria</h1>
          </div>
          <p className='page__paragraph home__header__paragraph_tablet'>Learn to engage your audience, present ideas, and monetize networks. Anastasiia's method: 15% theory, 85% practice, emphasizing overcoming fears for skill improvement.</p>
          <p className='page__paragraph home__header__paragraph'>If you want to significantly increase your annual income through confident and clear communication, then you're in the right place. Each course is a blend of practical experience and deep theoretical knowledge. After completion, you will know how to influence your audience to listen attentively to the end, how to present your own ideas, demonstrate new products, and monetize social networks. Anastasiia's method includes 15% theory and 85% practice, underlining the necessity to overcome fears and actively engage in order to improve public speaking skills.</p>
          <div className='home__header__button-container'>
            <h3 className='home__header__button__caption'>Let's boost your soft skills together.</h3>
            <button className='page__button home__header__button'>
              Try free
            </button>
          </div>
        </div>
        <picture>
          <source srcSet="images/home-page-main-img.png" media="(min-width: 1440px)" />
          <source srcSet="images/home-page-main-img-tablet.png" media="(min-width: 640px)" />
          <img src="images/home-page-main-img-mobile.svg" alt="MDN" />
        </picture>
        {/* <img src="images/home-page-main-img.png" className='home__header__main-img'/> */}
        <p className='page__paragraph home__header__paragraph_mobile'>Learn to engage your audience, present ideas, and monetize networks. Anastasiia's method: 15% theory, 85% practice, emphasizing overcoming fears for skill improvement.</p>
        <div className='home__header__button-container_mobile'>
            <h3 className='home__header__button__caption'>Let's boost your soft skills together.</h3>
            <button className='page__button home__header__button'>
              Try free
            </button>
          </div>
      </div>
    </div>}
    </>
  )
}
