import { useState } from "react";
import { DropDown } from "../Dropdown/Dropdown";
import '../../styles/page.scss';
import './courses.scss';
import { CourseCard } from "../CourseCard/CourseCard";
import cn from 'classnames';

const optionsTitle = [
  'Flexible',
  'Flexible with Webinars',
  'Coaching'
];

const optionsParagpaph = [
  {
    title: 'Flexible:',
    text: 'This course format offers all lessons in recorded format, allowing you to progress at your own pace and schedule without the need to sync with a group. Every assignment will be personally reviewed by the course author, Anastasiia. Additionally, you will have access to a Telegram chat for any course-related questions you might have. Meditation sessions are included in this package.*',
  },
  {
    title: 'Flexible with Webinars:',
    text: 'An extended version of the course, this format includes recorded lessons as well as live sessions for practice with other participants and the author. All assignments are reviewed by Anastasiia. You will be added to a Telegram chat group with other participants to discuss any questions or topics. Meditation sessions are also included in this format.*',
  },
  {
    title: 'Coaching:',
    text: 'This is a personalized mentorship with Anastasiia, offering exclusively live sessions tailored to your requests. You will also have access to a Telegram chat where you can ask any questions related to the course.'
  }

]

export const CoursesPage = () => {
  const [options, setOptions] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('Flexible');

  const handleNewTitle = (newTitle: string) => {
    setSelectedTitle(newTitle);
  }

  return (
    <section className="courses">
      <div className="courses__title-container">
        <h1 className="courses__title page__title_medium">
          Courses
        </h1>
        <h2 className="courses__subtitle">
          About Format
        </h2>
      </div>
      <div className="courses-flexible__paragraph-desktop">
        {optionsParagpaph.map((option) => (
          <div className="courses-flexible__item-desktop">
            <h1 className="courses-flexible__item__title-desktop">{option.title}</h1>
            <p className="courses-flexible__item__paragraph-desktop">{option.text}</p>
          </div>
        ))}
        </div>
      <div className="courses__dropdown-container">
        <DropDown subtitle="Format" options={options} />
        <DropDown subtitle="Direction" options={options} />
      </div>
      <div className="courses__cards-container">
        <CourseCard />
        <CourseCard />
      </div>
      <div className="courses-flexible-container">
        <div className="courses-flexible__item-container">
          {optionsTitle.map((title, index) => (
            <h1
              key={index}
              className={cn('courses-flexible__item', {'courses-flexible__item-active': selectedTitle === title})}
              onClick={() => handleNewTitle(title)}
            >
              {title}
            </h1>
          ))}
        </div>
        <div className="courses-flexible__paragraph">
          {selectedTitle === 'Flexible' && <p>
            This course format offers all lessons in recorded format, allowing you to progress at your own pace and schedule without the need to sync with a group. Every assignment will be personally reviewed by the course author, Anastasiia. Additionally, you will have access to a Telegram chat for any course-related questions you might have. Meditation sessions are included in this package.*
          </p>}
          {selectedTitle === 'Flexible with Webinars' && <p>
            An extended version of the course, this format includes recorded lessons as well as live sessions for practice with other participants and the author. All assignments are reviewed by Anastasiia. You will be added to a Telegram chat group with other participants to discuss any questions or topics. Meditation sessions are also included in this format.*
          </p>}
          {selectedTitle === 'Coaching' && <p>
            This is a personalized mentorship with Anastasiia, offering exclusively live sessions tailored to your requests. You will also have access to a Telegram chat where you can ask any questions related to the course.
          </p>}
        </div>
      </div>
      <p className="courses-flexible__subtitle">*Access to all materials in any course for three months after completion.</p>
    </section>
  )
}