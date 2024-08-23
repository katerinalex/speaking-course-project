import React from 'react';
import './MyCoursesEmpty.scss';
import '../../../styles/button.scss'

export const MyCoursesEmpty = () => {
  return (
    <div className='courses-empty'>
      <h1 className='courses-empty__title title'>My courses</h1>

      <h4 className='courses-empty__invite title title--H4'>
        We invite you to join the courses
      </h4>

      <div className='courses-empty__info body-text'>
        <p>
          Discover endless possibilities for <strong>networking</strong>, refining, and bringing
          <strong> ideas to life</strong>. Here, everyone is a creator, and you can become an important
          link in this <strong>interesting chain</strong>. In our team, you will find not only the
          opportunity to express your ideas, but also to receive <strong>support</strong> and inspiration
          from talented individuals who strive to achieve common goals.
        </p>
      </div>

      <div className="courses-empty__footer">
        <h4 className='courses-empty__footer__title title title--H4'>
          Join us and unleash your potential!
        </h4>

        <button className='courses-empty__button button button--pink'>
          Choose a course
        </button>
      </div>
    </div>
  );
}
