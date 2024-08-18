import "./details.scss";
import { Link, useParams } from "react-router-dom";
import { CommentCard } from "./Comment/CommentCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import * as actions from "../features/CourseSlicer";

export const CourseDetailsCoaching = () => {
  const dispatch = useAppDispatch();
  const selectedCoachingCourse = useAppSelector(
    (state) => state.courses.coachingCourse
  );

  const { coachingId } = useParams();

  useEffect(() => {
    if (coachingId) {
      dispatch(actions.fetchCoachingCourse(coachingId));
    }
  }, [coachingId, dispatch]);

  return (
    <div className="details">
      <div className="details__title-container">
        {/* <h1 className="page__title details__title">Personal Coaching</h1> */}
        <h1 className="page__title details__title">{selectedCoachingCourse?.name}</h1>
        <h3 className="details__subtitle">First 30-minute free meeting</h3>
        {/* <h3 className="details__subtitle">{selectedCoachingCourse.}</h3> */}
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
              Self-confident, voice control, stress management, leadership and
              team interaction, persuasive communication, audience engagement,
              handling Q&A sessions, personal branding, simplifying complex
              information, and many others
            </p> */}
              {selectedCoachingCourse?.skills.map((skill) => (
                 <p className="details__description__paragraph">{skill.name}</p>
              ))}
          </div>
          <div className="details__description-container">
            <h3 className="details__description__title">Format</h3>
            <p className="details__description__paragraph">
              Individual meetings
            </p>
          </div>
          <h2 className="details__description__caption">
            First 30-minute free meeting
          </h2>
          <div className="details__button-container">
            <Link to={"/"} className="details__button page__button-secondary">
              More details
            </Link>
            <Link to={"/"} className="details__button page__button-tertiary">
              Get consultation
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
      <div className="details-commercial-container">
        <h2 className="details-commercial__title">
          Unlock Your Potential with Personal Coaching!
        </h2>
        <p className="details-commercial__subtitle">
          Are you ready to take charge of your life and achieve your goals? Our
          personalized coaching services are here to guide you every step of the
          way.
        </p>
        <p className="details-commercial__paragraph">
          With us, you'll embark on a transformative journey tailored
          specifically to your needs. Whether you're striving for career
          advancement, seeking personal growth, or aiming for a healthier
          lifestyle, we will provide the support, accountability, and expertise
          you need to succeed.
        </p>
        <h3 className="details-commercial__list__subtitle">
          Discover the power of personalized coaching:
        </h3>
        <ul className="details-commercial__list">
          <li className="details-commercial__item">
            Set clear and achievable goals
          </li>
          <li className="details-commercial__item">
            Develop personalized strategies for success
          </li>
          <li className="details-commercial__item">
            Overcome obstacles and challenges
          </li>
          <li className="details-commercial__item">
            Cultivate confidence and self-awareness
          </li>
          <li className="details-commercial__item">
            Maximize your potential and performance
          </li>
        </ul>
        <p className="details-commercial__caption">
          Don't let uncertainty hold you back. Invest in yourself today with
          personal coaching and unlock a brighter future. Take the first step
          towards your dreams – book your session now!
        </p>
      </div>
      <div className="details-stages">
        <h2 className="details-stages__title">The stages of collaboration:</h2>
        <div className="details-stages-step__main-container">
          <div className="details-stages-step-container details-stages-step-container-first">
            <h3 className="details-stages-step__title details-stages-step__title-first">
              Step 1
            </h3>
            <p className="details-stages-step__paragraph">
              A 30-minute free meeting where we'll get acquainted and define the
              final goal and intentions for the coaching period. I will explain
              our plan and the necessary number of meetings.
            </p>
          </div>
          <div className="details-stages-step-container details-stages-step-container-second">
            <h3 className="details-stages-step__title details-stages-step__title-second">
              Step 2
            </h3>
            <p className="details-stages-step__paragraph">
              After agreeing on all organizational aspects, we begin work (the
              frequency of meetings is also discussed).
            </p>
          </div>
          <div className="details-stages__caption-container">
            <h3 className="details-stages-step__title details-stages-step__title-third">
              Step 2
            </h3>
            <p className="details-stages__caption details-poppins-500">
              In case our sessions do not help achieve the final goal set at the
              beginning, we will refund 100% of the coaching fee (provided all
              requirements from me during coaching are met).
            </p>
          </div>
        </div>
      </div>
      <div>
        <CommentCard
          name={"Tania"}
          review={
            "I hug you tightly ❤️ Guys, with great respect and confidence I can recommend Nastia's course. In addition to knowledge and a lot of practice, you will get cool people in your circle, jokes, support and self-discovery ❤️🔥 I RECOMMEND IT TO EVERYONE!"
          }
        />
      </div>
    </div>
  );
};
