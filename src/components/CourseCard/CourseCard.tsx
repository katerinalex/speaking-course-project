import { Link } from "react-router-dom";
import "./course.scss";
import { Course } from "../../types/Courses";

type Props = {
  course: Course;
};

export const CourseCard: React.FC<Props> = ({ course }) => {

  const link = course.courseType.toLowerCase();



  return (
    <Link to={`${link}/${course.id}`} className="course__card">
      <img src="images/course-test-img.svg" className='course__card-img' alt='course-img'/>
      {/* <img src={course.imageUrl} className="course__card-img" alt='course-img' /> */}
      <div className="course__card__title-container">
        <h1 className="course__card__title">{course.name}</h1>
      </div>
    </Link>
  );
};
