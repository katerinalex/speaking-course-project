import "../../styles/page.scss";
import "./home.scss";
// import './advantages.scss';
import "./history.scss";
import "../../styles/form.scss";
import { MenuSlider } from "../MenuSlider/MenuSlider";
import { CourseCard } from "../CourseCard/CourseCard";
import { AdvantagesSlider } from "../AdvantagesSlider/AdvantagesSlider";
import { CourseList } from "../CourseList/CourseList";
import * as coursesActions from "../features/CourseSlicer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";

export const HomePage = () => {
  const courses = useAppSelector((state) => state.courses.courses);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(coursesActions.fetchCourses());
  // }, [dispatch]);

  return (
    <section className="home">
      <MenuSlider />
      <AdvantagesSlider />
      <article className="consultation">
        <div className="consultation-container">
          <h1 className="consultation__title">
            If you don't know which course to choose, get a consultation.
          </h1>
          <button className="consultation__button page__button-secondary">
            Get free
          </button>
        </div>
      </article>
      <article className="course">
        <h1 className="page__title course__title">Courses</h1>
        <CourseList courses={courses} />
      </article>
      <article className="history">
        <h1 className="page__title_medium history__title">
          History of success
        </h1>
        <div
          // className='history-container'
          className="history__main-container"
        >
          <div className="history-container">
            <div className="history__paragraph-container">
              <p className="history__paragraph">
                I have become more confident in my speech, minimized the use of
                words-parasites, and finally understood how to maintain the
                right pace and make pauses effectively. I witnessed not only my
                own progress but also the progress of my peers. I was genuinely
                happy for their successes and admired each of their
                presentations...
              </p>
              <div className="history-img-container">
                <img src="images/telegram-icon-img.svg" />
                <img src="images/instagram-icon-secondary-img.svg" />
              </div>
              <div className="history__button-container">
                <button className="page__button-secondary history__button">
                  Read more
                </button>
              </div>
            </div>
            <img
              src="images/woman-history-img.svg"
              className="history__main-img"
            />
          </div>
        </div>
      </article>
      <article className="animals">
        <div className="animals-container animals-container-first">
          <h3 className="animals__title animals__title-first">
            If you'd like to aid animals, visit this profile.
          </h3>
          <img
            src="images/instagram-logo-big.svg"
            className="animals-img animals-img-first"
          />
        </div>
        <div className="animals-container animals-container-second">
          <img
            src="images/medal-logo.svg"
            className="animals-img animals-img-second"
          />
          <h3 className="animals__title animals__title-second">
            Upon full completion of the course, every participant receives a
            certificate.
          </h3>
        </div>
      </article>
    </section>
  );
};
