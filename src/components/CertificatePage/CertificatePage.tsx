import '../../styles/_typography.scss';
import './CertificatePage.scss';
import '../../styles/button.scss';

export const CertificatePage = () => {
  return (
    <div className='certificate'>
      <h1 className="title">Certificate</h1>

      <h4 className='title title--H4 certificate__second-title'>
        After completing any course you will receive a certificate
      </h4>

      <div className='body-text certificate__text'>
        To get a certificate you need to complete your chosen course in full, pass all homework and apply for a certificate. The application for a certificate is made in a free form via messenger Telegram.
      </div>

      <div className="get-certificate-block">
        <h4 className='title title--H4 get-certificate-block__title'>
          Stay in the loop, get certificates!
        </h4>

        <button className="get-certificate-block__button button button--pink">
          <img
            src='images/telegram-plane.svg'
            alt="Telegram Icon"
            className="get-certificate-block__button__icon"
          />
          Get Certification
        </button>
      </div>
    </div>
  );
};
