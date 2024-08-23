// MyCourses.tsx
import React from 'react';
import './CoursePage.scss';
import '../../../styles/button.scss';
import { BreadCrumb } from '../../../components/BreadCrumb';
import { MyCourseDetails } from '../../../components/MyCourseDetails/MyCourseDetails';
import { MeditationsBlock } from '../../../components/MeditationsBlock';
import cn from 'classnames';
import { CoursePageStyles } from './CoursePageAdaptation';
import useWindowSize from '../../../utils/types/hooks/useWindowSize';

export const CoursePage: React.FC = () => {
  const courses = [
    {
      "id": 1,
      "name": "Advanced Speaking Course",
      "courseType": "FLEXIBLE",
      "modules": [
        {
          "id": 1,
          "module": {
            "id": 1,
            "name": "Introduction to Speaking",
            "meditationName": "Speaking Confidence",
            "linkToMeditation": "images/example-images/my-courses-example.png",
            "themas": [
              {
                "id": 1,
                "name": "Building Confidence",
                "lessons": [
                  {
                    "id": 1,
                    "name": "Overcoming Fear of Speaking"
                  }
                ],
                "homeworkIds": [1]
              },
              {
                "id": 2,
                "name": "Using Positive Body Language",
                "lessons": [
                  {
                    "id": 2,
                    "name": "Using Positive Body Language"
                  }
                ],
                "homeworkIds": [2]
              }
            ],
            "webinar": {
              "id": 1,
              "name": "Introduction to Public Speaking Webinar",
              "date": "2024-09-01",
              "time": {
                "hour": 10,
                "minute": 0,
                "second": 0,
                "nano": 0
              },
              "link": "webinars/introduction-to-speaking"
            }
          },
          "completionPercentage": 20
        },
        {
          "id": 2,
          "module": {
            "id": 2,
            "name": "Pronunciation Mastery",
            "meditationName": "Clear Speech",
            "linkToMeditation": "images/example-images/my-courses-example.png",
            "themas": [
              {
                "id": 3,
                "name": "Mastering Vowel Sounds",
                "lessons": [
                  {
                    "id": 3,
                    "name": "Mastering Vowel Sounds"
                  }
                ],
                "homeworkIds": [3]
              },
              {
                "id": 4,
                "name": "Consonants and Clarity",
                "lessons": [
                  {
                    "id": 4,
                    "name": "Consonants and Clarity"
                  }
                ],
                "homeworkIds": [4]
              }
            ],
            "webinar": {
              "id": 2,
              "name": "Pronunciation Tips and Techniques Webinar",
              "date": "2024-09-05",
              "time": {
                "hour": 14,
                "minute": 0,
                "second": 0,
                "nano": 0
              },
              "link": "webinars/pronunciation-mastery"
            }
          },
          "completionPercentage": 0
        },
        {
          "id": 3,
          "module": {
            "id": 3,
            "name": "Effective Communication",
            "meditationName": "Power of Words",
            "linkToMeditation": "images/example-images/my-courses-example.png",
            "themas": [
              {
                "id": 5,
                "name": "Structuring Your Speech",
                "lessons": [
                  {
                    "id": 5,
                    "name": "Structuring Your Speech"
                  }
                ],
                "homeworkIds": [5]
              },
              {
                "id": 6,
                "name": "Engaging Your Audience",
                "lessons": [
                  {
                    "id": 6,
                    "name": "Engaging Your Audience"
                  }
                ],
                "homeworkIds": [6]
              }
            ],
            "webinar": {
              "id": 3,
              "name": "Effective Communication Strategies Webinar",
              "date": "2024-09-10",
              "time": {
                "hour": 16,
                "minute": 0,
                "second": 0,
                "nano": 0
              },
              "link": "webinars/effective-communication"
            }
          },
          "completionPercentage": 0
        },
        {
          "id": 4,
          "module": {
            "id": 4,
            "name": "Debate and Persuasion",
            "meditationName": "Confident Arguments",
            "linkToMeditation": "images/example-images/my-courses-example.png",
            "themas": [
              {
                "id": 7,
                "name": "Building Strong Points",
                "lessons": [
                  {
                    "id": 7,
                    "name": "Building Strong Points"
                  }
                ],
                "homeworkIds": [7]
              },
              {
                "id": 8,
                "name": "Handling Counterarguments",
                "lessons": [
                  {
                    "id": 8,
                    "name": "Handling Counterarguments"
                  }
                ],
                "homeworkIds": [8]
              }
            ],
            "webinar": {
              "id": 4,
              "name": "Debating Techniques Webinar",
              "date": "2024-09-15",
              "time": {
                "hour": 18,
                "minute": 0,
                "second": 0,
                "nano": 0
              },
              "link": "webinars/debate-and-persuasion"
            }
          },
          "completionPercentage": 0
        },
        {
          "id": 5,
          "module": {
            "id": 5,
            "name": "Advanced Speaking Techniques",
            "meditationName": "Mastering Speech",
            "linkToMeditation": "images/example-images/my-courses-example.png",
            "themas": [
              {
                "id": 9,
                "name": "Using Pauses Effectively",
                "lessons": [
                  {
                    "id": 9,
                    "name": "Using Pauses Effectively"
                  }
                ],
                "homeworkIds": [9]
              },
              {
                "id": 10,
                "name": "Voice Modulation and Tone",
                "lessons": [
                  {
                    "id": 10,
                    "name": "Voice Modulation and Tone"
                  }
                ],
                "homeworkIds": [10]
              }
            ],
            "webinar": {
              "id": 5,
              "name": "Advanced Speaking Techniques Webinar",
              "date": "2024-09-20",
              "time": {
                "hour": 20,
                "minute": 0,
                "second": 0,
                "nano": 0
              },
              "link": "webinars/advanced-speaking-techniques"
            }
          },
          "completionPercentage": 0
        }
      ]
    }
  ];
  

  const { width } = useWindowSize();

  const styles = CoursePageStyles(width);

  const titleClass = styles.getTitleClass();
  const meditationTitleClass = styles.getMeditationTitleClass();
  const subtitleClass = styles.getSubtitleClass();

  const course = courses[0];
  const modules = course.modules;
  const meditationIds = modules.map(module => module.module.id);
  const meditationNames = modules.map(module => module.module.meditationName);

  function capitalizeWords(text: string) {
    return text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  }

  return (
    <div className='course-page'>
      <div className="course-page__bread-crump">
        <BreadCrumb />
      </div>

      <div className="course-page__header">
        <div className="course-page__title">
          <h1 className={titleClass}>
            {course.name}
          </h1>
          <h5 className={
            cn(meditationTitleClass,
              'course-page__meditation-title')}>
            Bonus one for free + meditation
          </h5>
        </div>
        <div className="course-page__title__sub-title-box">
          <h5 className={cn(subtitleClass, 'course-page__title__sub-title')}>
            {capitalizeWords(course.courseType)}
          </h5>
          <h5 className="
          course-page__meditation-title--on-phone 
          body-text body-text--small-text'
          ">
            Bonus one for free + meditation
          </h5>
        </div>
      </div>

      <div className="course-page__content">
        <div className='course-page__list'>
          {modules.map(module => (
            <MyCourseDetails module={module} />
          ))}
        </div>

        <div className="course-page__meditations">
          <MeditationsBlock id={meditationIds} meditations={meditationNames} />
        </div>
      </div>
    </div>
  );
};
