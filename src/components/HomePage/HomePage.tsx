import '../../styles/page.scss';
import './home.scss';
import './advantages.scss';
import './history.scss';
import '../../styles/form.scss';
import { MenuSlider } from '../MenuSlider/MenuSlider';
import { CourseCard } from '../CourseCard/CourseCard';

export const HomePage = () => {
  return (
    <section className='home'>
      <MenuSlider />
      <article className='advantages'>
        <img src='images/graduates-200-img.png' className='advantages-img advantages-img-first' />
        <img src='images/get-promotions-img.png' className='advantages-img advantages-img-second' />
        <img src='images/free-maditations-img.png' className='advantages-img advantages-img-third' />
      </article>
      <article className='consultation'>
        <h1 className='consultation__title'>If you don't know which course to choose, get a consultation.</h1>
        <button className='consultation__button page__button-secondary'>
          Get free
        </button>
      </article>
      <article className='course'>
        <h1 className='page__title course__title'>Courses</h1>
        <CourseCard />
      </article>
      <article className='history'>
        <h1 className='page__title_medium history__title'>History of success</h1>
        <div className='history-container'>
          <div>
            <p className='history__paragraph'>
              I have become more confident in my speech, minimized the use of words-parasites, and finally understood how to maintain the right pace and make pauses effectively.
              I witnessed not only my own progress but also the progress of my peers. I was genuinely happy for their successes and admired each of their presentations...
            </p>
            <div className='history-img-container'>
              <img src='images/telegram-icon-img.svg' />
              <img src='images/instagram-icon-secondary-img.svg' />
            </div>
            <div className='history__button-container'>
              <button className='page__button-secondary history__button'>
                Read more
              </button>
            </div>
          </div>
          <img src='images/woman-history-img.svg' />
        </div>
      </article>
      <article className='animals'>
        <div className='animals-container animals-container-first'>
          <h3 className='animals__title animals__title-first'>
            If you'd like to aid animals, visit this profile.
          </h3>
          <img
            src='images/instagram-logo-big.svg'
            className='animals-img animals-img-first'
          />
        </div>
        <div className='animals-container animals-container-second'>
          <img
            src='images/medal-logo.svg'
            className='animals-img animals-img-second'
          />
          <h3 className='animals__title animals__title-second'>
            Upon full completion of the course, every participant receives a certificate.
          </h3>
        </div>
      </article>
      <form className='form'>
        <div className='form-container'>
          <h1 className='form__title'>Do you need additional consultation?</h1>
          <div className='form__field-container'>
            <label className='form__label'>
              <span className='form__label__title'>Name</span>
              <input
                type='text'
                className='form__field'
                placeholder='Enter your name'
              ></input>
            </label>
            <div className='form__radio__main-container'>
              <div className='form__radio-container'>
                <label className='form__label__radio'>
                  <input type='radio' className='form__radio'></input>
                  <span className='form__label__radio__checkmark'></span>
                  <span className='form__label__radio__title'>Email</span>
                </label>
                <label className='form__label__radio'>
                  <input type='radio' className='form__radio'></input>
                  <span className='form__label__radio__checkmark'></span>
                  <span className='form__label__radio__title'>Telegram</span>
                </label>
              </div>
              <input type='email' className='form__field' placeholder='Enter your email'></input>
            </div>
            <label className='form__label'>
              <span className='form__label__title'>Enter your phone number</span>
              <input
                type='text'
                className='form__field'
                placeholder='+30 000 000 00 00'
              ></input>
            </label>
            <button className='form__button page__button'>
              Get consultation
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}
