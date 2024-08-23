import React from 'react';
import './MyCourseCard.scss';
import '../../styles/button.scss';
import { MyCourseItem } from '../../utils/types/MyCourse';

interface Props {
  course: MyCourseItem;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + ' and...';
  }
  return text;
};

export const MyCourseCard: React.FC<Props> = ({ course }) => {
  const skillsText = course.course.skills.map(skill => skill.name).join(', ');
  const truncatedSkillsText = truncateText(skillsText, 50);

  return (
    <div className='my-course-card'>
      <img src={course.course.imageUrl} alt={course.course.name} className='my-course-card__image' />


      <div className="my-course-card__main">
        <div className='my-course-card__content'>

          <div className="my-course-card__info">
            <div className="my-course-card__info__top">
              <h4 className='my-course-card__header title title--H4'>{course.course.name}</h4>
              <p className='my-course-card__info__coursetype body-text body-text--secondary'>
                {course.course.courseType}
              </p>
            </div>

            <div className="my-course-card__info__row">
              <p className="my-course-card__info__label body-text">Skills you’ll gain</p>
              <p className='my-course-card__info__text body-text body-text--secondary'>
                {truncatedSkillsText}
              </p>
            </div>
            <div className="my-course-card__info__row my-course-card__info__format">
              <p className="my-course-card__info__label body-text">Format</p>
              <p className='my-course-card__info__text body-text body-text--secondary'>
                {course.course.courseType}
              </p>
            </div>
          </div>
        </div>

        <div className='my-course-card__actions'>
          {course.completionPercentage === 100 ? (
            <button className='button button--pink my-course-card__button'>Repeat Course</button>
          ) : (
            <button className='button button--pink my-course-card__button'>Start</button>
          )}

          <div className='my-course-card__progress'>
            <div className='my-course-card__progress__header'>
              <p className='body-text body-text--small-text'>Completed</p>
              <span className='body-text body-text--secondary'>{course.completionPercentage}%</span>
            </div>
            <div className='my-course-card__progress__bar'>
              <div
                className='my-course-card__progress__fill'
                style={{ width: `${course.completionPercentage}%` }}
              />
            </div>
            <div className='my-course-card__progress__dates'>
              {course.course.endDate === null ? (
                <p className='body-text my-course-card__progress__dates__label'>Unlimited</p>
              ) : (
                <>
                  <div className="my-course-card__progress__dates__container body-text">
                    <p className='my-course-card__progress__dates__label'>Start</p>
                    <p className='body-text--small-text'> {course.course.startDate}</p>
                  </div><div className="my-course-card__progress__dates__container body-text">
                    <p className='my-course-card__progress__dates__label'>Finish</p>
                    <p className='body-text--small-text'> {course.course.endDate}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
