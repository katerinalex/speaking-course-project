import './Header.scss';
import '../../styles/page.scss';
import { NavLink, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <>
    <header className="header">
      <img src="images/logo-img.svg" className='header-logo' />
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
      <button className="page__button header__button">
        Sign up
      </button>
    </header>
    {location.pathname === '/' || location.pathname === '/home' && <div className="home">
      <div className="home__header">
        <div>
          <div className='home__header__title-container'>
            <h1 className='page__title home__header__title'>Author courses</h1>
            <h1 className='home__header__title-active'>of Anastasiia Shkiria</h1>
          </div>
          <p className='page__paragraph home__header__paragraph'>If you want to significantly increase your annual income through confident and clear communication, then you're in the right place. Each course is a blend of practical experience and deep theoretical knowledge. After completion, you will know how to influence your audience to listen attentively to the end, how to present your own ideas, demonstrate new products, and monetize social networks. Anastasiia's method includes 15% theory and 85% practice, underlining the necessity to overcome fears and actively engage in order to improve public speaking skills.</p>
          <div className='home__header__button-container'>
            <h3 className='home__header__button__caption'>Let's boost your soft skills together.</h3>
            <button className='page__button home__header__button'>
              Try free
            </button>
          </div>
        </div>
        <img src="images/home-page-main-img.png" />

      </div>
    </div>}
    </>
  )
}
