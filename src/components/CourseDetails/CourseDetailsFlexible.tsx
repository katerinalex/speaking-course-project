import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./details.scss";
import { Link, useParams } from "react-router-dom";
import * as actions from "../features/CourseSlicer";
import { useEffect, useState } from "react";
import classNames from "classnames";

const modules = [
  {
    moduleNumber: 1,
    moduleName: "Intro",
    lessons: [
      "Getting to Know the Speaker: An introduction",
      "Exploring Main Fears: Addressing criticism, judgment, voice confidence, and expertise doubts",
      "Envision achievements without fear of speaking",
      "TED Talks: Utilizing this platform to enhance soft skills.",
      "Crafting a Self-Presentation: A step-by-step guide",
      "Homework",
    ],
  },
  {
    moduleNumber: 2,
    moduleName: "Overcoming Insecure Sounding",
    lessons: [
      "Developing a Clear Vocal Sound: Techniques for clarity",
      "Eliminating Parasitic Words (aaa, eee): Strategies to refine speech",
      "Voice Volume Control: Finding the right volume for speaking",
      "Enhancing Diction: Exercises for clear articulation",
      "Everyday Techniques: Simple practices for everyday improvement",
      "Embracing Your Voice: Learning to love and appreciate your own voice",
      "Homework",
      "Confident sounding without voice or hand tremors",
      "Understanding Breathing: How to breathe correctly",
      "Breathing Exercises: Techniques to avoid noticeable pauses in speech.",
      "Recognizing Signs of Insecurity: Identifying and addressing hand trembling and rapid heartbeat (8 techniques on how to minimize it)",
      "Homework",
    ],
  },
  {
    moduleNumber: 3,
    moduleName: "Improving Presentation Skills",
    lessons: [
      "Developing a Clear Vocal Sound: Techniques for clarity",
      "Eliminating Parasitic Words (aaa, eee): Strategies to refine speech",
      "Voice Volume Control: Finding the right volume for speaking",
      "Enhancing Diction: Exercises for clear articulation",
      "Everyday Techniques: Simple practices for everyday improvement",
      "Embracing Your Voice: Learning to love and appreciate your own voice",
      "Homework",
      "Confident sounding without voice or hand tremors",
      "Understanding Breathing: How to breathe correctly",
      "Breathing Exercises: Techniques to avoid noticeable pauses in speech.",
      "Recognizing Signs of Insecurity: Identifying and addressing hand trembling and rapid heartbeat (8 techniques on how to minimize it)",
      "Homework",
    ],
  },
  {
    moduleNumber: 4,
    moduleName: "Conducting HR Interviews",
    lessons: [
      "Developing a Clear Vocal Sound: Techniques for clarity",
      "Eliminating Parasitic Words (aaa, eee): Strategies to refine speech",
      "Voice Volume Control: Finding the right volume for speaking",
      "Enhancing Diction: Exercises for clear articulation",
      "Everyday Techniques: Simple practices for everyday improvement",
      "Embracing Your Voice: Learning to love and appreciate your own voice",
      "Homework",
      "Confident sounding without voice or hand tremors",
      "Understanding Breathing: How to breathe correctly",
      "Breathing Exercises: Techniques to avoid noticeable pauses in speech.",
      "Recognizing Signs of Insecurity: Identifying and addressing hand trembling and rapid heartbeat (8 techniques on how to minimize it)",
      "Homework",
    ],
  },
  {
    moduleNumber: 5,
    moduleName: "Final presentation",
    lessons: ["Developing a Clear Vocal Sound: Techniques for clarity"],
  },
];

const categories = [
  { name: "All", active: false },
  { name: "Bloggers", active: false },
  { name: "CEO and Managers", active: false },
  { name: "Consultants and Advisors", active: false },
  { name: "Entrepreneurs and Start-up-founders", active: false },
  { name: "For everyday life", active: false },
  { name: "Healthcare Professionals", active: false },
  { name: "IT specialists", active: true },
  { name: "Life Coaches", active: false },
  { name: "Marketing Professionals and PR Specialists", active: false },
];

const dateRanges = [
  { range: "01/05/24-21/05/24", active: true },
  { range: "22/05/24-13/06/24", active: false },
  { range: "14/06/24-04/07/24", active: false },
];

export const CourseDetailsFlexible = () => {
  const dispatch = useAppDispatch();
  const selectedFlexibleCourse = useAppSelector(
    (state) => state.courses.flexibleCourse
  );
  const { flexibleId } = useParams();
  const [flexibleWithWebinars, setFlexibleWithWebinars] = useState(false);

  const handleSwitchFlexible = () => {
    setFlexibleWithWebinars(!flexibleWithWebinars);
  };

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
        <div className="details-img-container">
          <img
            src="images/temporary-img.png"
            className="details-img-flexible"
            alt="main-img"
          />
          <div className="details-flexible-switch-container">
            <button
              className={classNames("details-flexible-switch__button", {
                "details-flexible-switch__button-active": !flexibleWithWebinars,
              })}
              onClick={handleSwitchFlexible}
            >
              Flexible
            </button>
            <button
              className={classNames("details-flexible-switch__button", {
                "details-flexible-switch__button-active": flexibleWithWebinars,
              })}
              onClick={handleSwitchFlexible}
            >
              Flexible and webinars
            </button>
          </div>
        </div>
        <div className="details__description">
          <div className="details__description-container">
            <h3 className="details__description__title">Skills you’ll gain</h3>
            {!selectedFlexibleCourse?.skills.length && (
              <p className="details__description__paragraph">
                Public speaking confidence, technical demonstrations (demo),
                voice control, interview skills (HR), stress management,
                audience engagement, handling Q&A sessions, leadership and team
                interaction, personal branding, simplifying complex information,
                and many others.
              </p>
            )}
            {selectedFlexibleCourse?.skills.map((skill) => (
              <p className="details__description__paragraph">{skill.name}</p>
            ))}
          </div>

          <div className="details__description-container">
            <h3 className="details__description__title">Available</h3>

            {!flexibleWithWebinars ? (
              <p className="details__description__paragraph">
                Unlimited <br />
                You will study when it is convenient for you, and we will be
                there to help you.
              </p>
            ) : (
              <div className="details__description-container-time">
                {dateRanges.map((data, index) => (
                  <p
                    key={index}
                    className={classNames("details__description__paragraph", {
                      "details__description__paragraph-time": !data.active,
                      "details__description__paragraph-time-active":
                        data?.active,
                    })}
                  >
                    {data.range}
                  </p>
                ))}
              </div>
            )}
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
            {categories.slice(0, 5).map((category) => (
              <li
                className={classNames("details-direction__item", {
                  "details-direction__item-active": category.active === true,
                })}
              >
                {category.name}
              </li>
            ))}
          </ul>
          <ul className="details-direction__list">
            {categories.slice(5).map((category) => (
              <li
                className={classNames("details-direction__item", {
                  "details-direction__item-active": category.active === true,
                })}
              >
                {category.name}
              </li>
            ))}
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
      {modules.map((module) => (
        <div className="details-module-container">
          <div className="details-module__title-container">
            <h2 className="details-module__title page-poppins-500">
              {`Module ${module.moduleNumber}`}
            </h2>
            <h2 className="details-module__name page-poppins-500">
              {module.moduleName}
            </h2>
          </div>
          <ul className="details-module__list">
            {module.lessons.map((lesson) => (
              <li className="details-module__item-secondary page-poppins-400">
                {lesson}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
