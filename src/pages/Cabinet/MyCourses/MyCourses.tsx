// MyCourses.tsx
import React from 'react';
import './MyCourses.scss';
import '../../../styles/button.scss';
import { MyCoursesEmpty } from '../MyCoursesEmpty';
import { MyCourseCard } from '../../../components/MyCourseCard';
import { MyCourseItem } from '../../../utils/types/MyCourse'; // Ensure the correct import path
import { ButtonAddCourse } from '../../../components/ButtonAddCourse';

export const MyCourses: React.FC = () => {
  const courses: MyCourseItem[] = [
    {
      id: 1,
      course: {
        id: 1,
        name: 'Public speaking for IT',
        imageUrl: 'images/example-images/my-courses-example.png',
        courseType: 'Flexible with webinars',
        skills: [
          { name: 'Communication' },
          { name: 'Critical Thinking' },
          { name: 'Public Relations' },
          { name: 'Strategy' },
          { name: 'Leadership' }
        ],
        startDate: '2024-01-05',
        endDate: '2024-05-21'
      },
      completionPercentage: 0
    },
    {
      id: 2,
      course: {
        id: 2,
        name: 'Public speaking for IT',
        imageUrl: 'images/example-images/my-courses-example.png',
        courseType: 'Flexible',
        skills: [
          { name: 'Communication' },
          { name: 'Critical Thinking' },
          { name: 'Public Relations' },
          { name: 'Strategy' },
          { name: 'Leadership' }
        ],
        startDate: null,
        endDate: null
      },
      completionPercentage: 50
    },
    {
      id: 3,
      course: {
        id: 3,
        name: 'Time Management',
        imageUrl: 'images/example-images/my-courses-example.png',
        courseType: 'Flexible',
        skills: [
          { name: 'Communication' },
          { name: 'Critical Thinking' },
          { name: 'Public Relations' },
          { name: 'Strategy' },
          { name: 'Leadership' }
        ],
        startDate: '2024-01-05',
        endDate: '2024-05-21'
      },
      completionPercentage: 100
    }
  ];

  return (
    <div className='courses'>

      {courses.length === 0 ? (
        <MyCoursesEmpty />
      ) : (
        <>
          <div className="courses__top">
            <h1 className='title'>My courses</h1>
            <button className="courses__add-button">
              <ButtonAddCourse />
            </button>
          </div><div className='courses__list'>
            {courses.map(course => (
              <MyCourseCard key={course.id} course={course} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
