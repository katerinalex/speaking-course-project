import './footer.scss';

export const Footer = () => {
  return (
    <>
          <form className='form'>
        <div className='form-container'>
          <h1 className='form__title'>Do you need additional consultation?</h1>
          <div className='form__field__main-container'>
          <div className='form__field-container'>
            <label className='form__label form__label-first'>
              <span className='form__label__title'>Name</span>
              <input
                type='text'
                className='form__field'
                placeholder='Enter your name'
              ></input>
            </label>
            <div className='form__label__radio-button__main-container'>
              <div className='form__label__radio-button-container'>
                <label className='form__label__radio'>
                  <input type='checkbox' className='form__label__radio-button'></input>
                  <span className='form__label__radio__checkmark'></span>
                  <span className='form__label__radio__title'>Email</span>
                </label>
                <label className='form__label__radio'>
                  <input type='checkbox' className='form__label__radio-button'></input>
                  <span className='form__label__radio__checkmark'></span>
                  <span className='form__label__radio__title'>Telegram</span>
                </label>
              </div>
              <input type='email' className='form__field' placeholder='Enter your email'></input>
            </div>
            <label className='form__label form__label-second'>
              <span className='form__label__title'>Enter your phone number</span>
              <input
                type='text'
                className='form__field'
                placeholder='+30 000 000 00 00'
              ></input>
            </label>
            <button className='form__button form__button_grid page__button'>
              Get consultation
            </button>
          </div>
          <label className='form__label form__label__check'>
            <input type='checkbox' className='form__label__check-radio'/>
            <span className='form__label__check-radio__mark' />
            I consent to the processing of my personal data
          </label>
          </div>
        </div>
      </form>
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
    </>
  )
}