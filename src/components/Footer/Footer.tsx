import './footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <img src="images/logo-img.svg" className='footer-logo' />
      <div className='footer-container'>
        <ul className="footer__list">
          <li className="footer__item footer__link">
            {/* <NavLink to={'/'}> */}
              Home
            {/* </NavLink> */}
          </li>
          <li className="footer__item footer__link">
            {/* <NavLink to={'/'}> */}
              Courses
            {/* </NavLink> */}
          </li>
          <li className="footer__item footer__link">
            {/* <NavLink to={'/'}> */}
              Blog
            {/* </NavLink> */}
          </li>
          <li className="footer__item footer__link">
            {/* <NavLink to={'/'}> */}
              Success
            {/* </NavLink> */}
          </li>
        </ul>
        <ul className="footer-logo__list">
          <li className="footer__link footer-logo__item">
            <img src="images/instagram.svg"/>
            <h3 className='footer-logo__item__title'>Instagram</h3>
          </li>
          <li className="footer__link footer-logo__item">
            <img src="images/telegram-logo.svg"/>
            <h3 className='footer-logo__item__title'>Telegram</h3>
          </li>
          <li className="footer__link footer-logo__item">
            <img src="images/whatsapp-logo.svg"/>
            <h3 className='footer-logo__item__title'>Whatsapp</h3>
          </li>
          <li className="footer__link footer-logo__item">
            <img src="images/facebook-logo.svg"/>
            <h3 className='footer-logo__item__title'>Facebook</h3>
          </li>
        </ul>
        <ul className="footer-logo__list_mobile">
          <li className="footer__link footer-logo__item">
            <img src="images/instagram.svg"/>
          </li>
          <li className="footer__link footer-logo__item">
            <img src="images/telegram-logo.svg"/>
          </li>
          <li className="footer__link footer-logo__item">
            <img src="images/whatsapp-logo.svg"/>
          </li>
          <li className="footer__link footer-logo__item">
            <img src="images/facebook-logo.svg"/>
          </li>
        </ul>
        <div>
          <h3 className='footer__title footer__title-email'>Email</h3>
          <h3 className='footer__title footer__title-phone'>+38 000 000 00 00</h3>
        </div>
      </div>
      <h3 className='footer__title footer__title-copyright'><img src='images/quotation.svg' />Public speaking courses by Anastasiia Shkiria, 2024 All rights reserved</h3>
    </footer>
  )
}