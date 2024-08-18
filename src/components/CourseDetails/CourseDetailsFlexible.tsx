import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./details.scss";
import { Link, useParams } from "react-router-dom";
import * as actions from "../features/CourseSlicer";
import { useEffect } from "react";

export const CourseDetailsFlexible = () => {
  const dispatch = useAppDispatch();
  const selectedFlexibleCourse = useAppSelector(
    (state) => state.courses.flexibleCourse
  );
  const { flexibleId } = useParams();

  useEffect(() => {
    if (flexibleId) {
      dispatch(actions.fetchFlexibleCourse(flexibleId));
    }
  }, [dispatch, flexibleId]);

  return (
    <div className="details">
      <div className="details__title-container">
        <h1 className="page__title details__title">
          {selectedFlexibleCourse?.name}
        </h1>
        <h3 className="details__subtitle">Bonus one for free + meditation</h3>
      </div>

      <div className="details__main-container">
        <img
          src="images/temporary-img.png"
          className="details-img"
          alt="main-img"
        />
        <div className="details__description">
          <div className="details__description-container">
            <h3 className="details__description__title">Skills you’ll gain</h3>
            {/* <p className="details__description__paragraph">
              Public speaking confidence, technical demonstrations (demo), voice
              control, interview skills (HR), stress management, audience
              engagement, handling Q&A sessions, leadership and team
              interaction, personal branding, simplifying complex information,
              and many others.
            </p> */}
            {selectedFlexibleCourse?.skills.map((skill) => (
              <p className="details__description__paragraph">{skill.name}</p>
            ))}
          </div>

          <div className="details__description-container">
            <h3 className="details__description__title">Available</h3>
            <p className="details__description__paragraph">
              Unlimited <br />
              You will study when it is convenient for you, and we will be there
              to help you.
            </p>
          </div>

          <div className="details__button-container">
            <Link to={"/"} className="details__button page__button-secondary">
              {selectedFlexibleCourse?.price}$ Buy
            </Link>
            <Link to={"/"} className="details__button page__button-tertiary">
              Try free
            </Link>
          </div>
        </div>
      </div>

      <div className="details-direction-container">
        <h3 className="details-direction__title">Direction</h3>
        <div className="details-direction__list-container">
          <ul className="details-direction__list">
            <li>All</li>
            <li>Bloggers</li>
            <li>CEO and Managers</li>
            <li>Consultants and Advisors</li>
            <li>Entrepreneurs and Start-up-founders</li>
          </ul>
          <ul className="details-direction__list">
            <li>For everyday life</li>
            <li>Healthcare Professionals</li>
            <li>IT specialists</li>
            <li>Life Coaches</li>
            <li>Marketing Professionals and PR Specialists</li>
          </ul>
        </div>
      </div>
      <div className="details-module-container">
        {selectedFlexibleCourse?.modules.map((module) => (
          <>
            <div className="details-module__title-container">
              <h2 className="details-module__title page-poppins-500">
                Module {module.id}
              </h2>
              <h2 className="details-module__name page-poppins-500">
                {module.name}
              </h2>
            </div>
            <ul className="details-module__list">
              {module.themas.map((thema) => (
                <li className="details-module__item-secondary page-poppins-400">
                  {thema.name}
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>

      {/* <div className="details-module-container">
        <div className="details-module__title-container">
          <h2 className="details-module__title page-poppins-500">Module 1</h2>
          <h2 className="details-module__name page-poppins-500">Intro</h2>
        </div>
        <ul className="details-module__list">
          <li className="details-module__item-secondary page-poppins-400">
            Getting to Know the Speaker: An introduction
          </li>
          <li className="details-module__item-secondary page-poppins-400">
            Exploring Main Fears: Addressing criticism, judgment, voice
            confidence, and expertise doubts
          </li>
          <li className="details-module__item-secondary page-poppins-400">
            Envision achievements without fear of speaking
          </li>
          <li className="details-module__item-secondary page-poppins-400">
            TED Talks: Utilizing this platform to enhance soft skills.
          </li>
          <li className="details-module__item-secondary page-poppins-400">
            Crafting a Self-Presentation: A step-by-step guide
          </li>
          <li className="details-module__item-secondary page-poppins-400">
            Homework
          </li>
        </ul>
      </div>

      <div className="details-module-container">
        <div className="details-module__title-container">
          <h2 className="details-module__title page-poppins-500">Module 2</h2>
          <h2 className="details-module__name page-poppins-500">
            Overcoming Insecure Sounding
          </h2>
        </div>
        <div className="details-module__list-container">
          <h2 className="details-module__list__title page-poppins-500">
            Developing a Clear Vocal Sound: Techniques for clarity
          </h2>
          <ul className="details-module__list">
            <li className="details-module__item page-poppins-500">
              Eliminating Parasitic Words (aaa, eee): Strategies to refine
              speech
            </li>
            <ul className="details-module__list">
              <li className="details-module__item-secondary">
                Voice Volume Control: Finding the right volume for speaking
              </li>
              <li className="details-module__item-secondary">
                Enhancing Diction: Exercises for clear articulation
              </li>
              <li className="details-module__item-secondary">
                Everyday Techniques: Simple practices for everyday improvement
              </li>
              <li className="details-module__item-secondary">
                Embracing Your Voice: Learning to love and appreciate your own
                voice
              </li>
              <li className="details-module__item-secondary">Homework</li>
            </ul>
            <li className="details-module__item page-poppins-500">
              Confident sounding without voice or hand tremors
            </li>
            <ul className="details-module__list-secondary">
              <li className="details-module__item-secondary">
                Understanding Breathing: How to breathe correctly
              </li>
              <li className="details-module__item-secondary">
                Breathing Exercises: Techniques to avoid noticeable pauses in
                speech.
              </li>
              <li className="details-module__item-secondary">
                Recognizing Signs of Insecurity: Identifying and addressing hand
                trembling and rapid heartbeat (8 techniques on how to minimize
                it)
              </li>
              <li className="details-module__item-secondary">Homework</li>
            </ul>
          </ul>
        </div>
      </div>

      <div className="details-module-container">
        <div className="details-module__title-container">
          <h2 className="details-module__title page-poppins-500">Module 3</h2>
          <h2 className="details-module__name page-poppins-500">
            Improving Presentation Skills
          </h2>
        </div>
        <div className="details-module__list-container">
          <h2 className="details-module__list__title page-poppins-500">
            Developing a Clear Vocal Sound: Techniques for clarity
          </h2>
          <ul className="details-module__list">
            <li className="details-module__item page-poppins-500">
              Eliminating Parasitic Words (aaa, eee): Strategies to refine
              speech
            </li>
            <ul className="details-module__list">
              <li className="details-module__item-secondary">
                Voice Volume Control: Finding the right volume for speaking
              </li>
              <li className="details-module__item-secondary">
                Enhancing Diction: Exercises for clear articulation
              </li>
              <li className="details-module__item-secondary">
                Everyday Techniques: Simple practices for everyday improvement
              </li>
              <li className="details-module__item-secondary">
                Embracing Your Voice: Learning to love and appreciate your own
                voice
              </li>
              <li className="details-module__item-secondary">Homework</li>
            </ul>
            <li className="details-module__item page-poppins-500">
              Confident sounding without voice or hand tremors
            </li>
            <ul className="details-module__list-secondary">
              <li className="details-module__item-secondary">
                Understanding Breathing: How to breathe correctly
              </li>
              <li className="details-module__item-secondary">
                Breathing Exercises: Techniques to avoid noticeable pauses in
                speech.
              </li>
              <li className="details-module__item-secondary">
                Recognizing Signs of Insecurity: Identifying and addressing hand
                trembling and rapid heartbeat (8 techniques on how to minimize
                it)
              </li>
              <li className="details-module__item-secondary">Homework</li>
            </ul>
          </ul>
        </div>
      </div>

      <div className="details-module-container">
        <div className="details-module__title-container">
          <h2 className="details-module__title page-poppins-500">Module 4</h2>
          <h2 className="details-module__name page-poppins-500">
            Conducting HR Interviews
          </h2>
        </div>
        <div className="details-module__list-container">
          <h2 className="details-module__list__title page-poppins-500">
            Developing a Clear Vocal Sound: Techniques for clarity
          </h2>
          <ul className="details-module__list">
            <li className="details-module__item page-poppins-500">
              Eliminating Parasitic Words (aaa, eee): Strategies to refine
              speech
            </li>
            <ul className="details-module__list">
              <li className="details-module__item-secondary">
                Voice Volume Control: Finding the right volume for speaking
              </li>
              <li className="details-module__item-secondary">
                Enhancing Diction: Exercises for clear articulation
              </li>
              <li className="details-module__item-secondary">
                Everyday Techniques: Simple practices for everyday improvement
              </li>
              <li className="details-module__item-secondary">
                Embracing Your Voice: Learning to love and appreciate your own
                voice
              </li>
              <li className="details-module__item-secondary">Homework</li>
            </ul>
            <li className="details-module__item page-poppins-500">
              Confident sounding without voice or hand tremors
            </li>
            <ul className="details-module__list-secondary">
              <li className="details-module__item-secondary">
                Understanding Breathing: How to breathe correctly
              </li>
              <li className="details-module__item-secondary">
                Breathing Exercises: Techniques to avoid noticeable pauses in
                speech.
              </li>
              <li className="details-module__item-secondary">
                Recognizing Signs of Insecurity: Identifying and addressing hand
                trembling and rapid heartbeat (8 techniques on how to minimize
                it)
              </li>
              <li className="details-module__item-secondary">Homework</li>
            </ul>
          </ul>
        </div>
      </div>

      <div className="details-module-container">
        <div className="details-module__title-container">
          <h2 className="details-module__title page-poppins-500">Module 5</h2>
          <h2 className="details-module__name page-poppins-500">
            Final presentation
          </h2>
        </div>
        <div className="details-module__list-container">
          <h2 className="details-module__list__title page-poppins-500">
            Developing a Clear Vocal Sound: Techniques for clarity
          </h2>
        </div>
      </div> */}
    </div>
  );
};
