import './course.scss';

export const CourseCard = () => {
  return (
    <div className="course__card">
      <img src="images/course-test-img.svg" className='course__card-img'/>
      <div className="course__card__title-container">
        <h1 className="course__card__title">Personal coaching</h1>
      </div>
    </div>
  )
}