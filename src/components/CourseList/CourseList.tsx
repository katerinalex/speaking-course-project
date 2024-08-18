import { Course } from "../../types/Courses";
import { CourseCard } from "../CourseCard/CourseCard";
import './coursesList.scss';

type Props = {
  courses: Course[];
};

export const CourseList:React.FC<Props> = ({ courses }) => {

//   if (!courses.length) {
//     return <h2>No courses</h2>
//   }

  return (
    <div className="courses__list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course}/>
      ))}
    </div>
  )
};
