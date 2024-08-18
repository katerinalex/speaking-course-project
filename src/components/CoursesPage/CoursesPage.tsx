import { useEffect, useState } from "react";
import { DropDown } from "../Dropdown/Dropdown";
import "../../styles/page.scss";
import "./courses.scss";
import { CourseCard } from "../CourseCard/CourseCard";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import * as coursesActions from "../features/CourseSlicer";
import { CourseList } from "../CourseList/CourseList";

const optionsTitle = ["Flexible", "Flexible with Webinars", "Coaching"];

const optionsParagraph = [
  {
    title: "Flexible:",
    text: "This course format offers all lessons in recorded format, allowing you to progress at your own pace and schedule without the need to sync with a group. Every assignment will be personally reviewed by the course author, Anastasiia. Additionally, you will have access to a Telegram chat for any course-related questions you might have. Meditation sessions are included in this package.*",
  },
  {
    title: "Flexible with Webinars:",
    text: "An extended version of the course, this format includes recorded lessons as well as live sessions for practice with other participants and the author. All assignments are reviewed by Anastasiia. You will be added to a Telegram chat group with other participants to discuss any questions or topics. Meditation sessions are also included in this format.*",
  },
  {
    title: "Coaching:",
    text: "This is a personalized mentorship with Anastasiia, offering exclusively live sessions tailored to your requests. You will also have access to a Telegram chat where you can ask any questions related to the course.",
  },
];

const formatOptions = [
  { title: "All", value: "all" },
  { title: "Flexible", value: "FLEXIBLE" },
  { title: "Flexible with webinars", value: "FLEXIBLE_WITH_WEBINARS" },
  { title: "Coaching", value: "COACHING" },
];

const directionOptions = [
  { title: "All", value: "all" },
  { title: "Bloggers", value: "bloggers" },
  { title: "CEO and Managers", value: "CeoAndManagers" },
  { title: "Consultants and Advisors", value: "ConsultantsAndAdvisors" },
  {
    title: "Entrepreneurs and Start-up Founders",
    value: "EntrepreneursAndStart-upFounders",
  },
  { title: "For everyday life", value: "ForEverydayLife" },
  { title: "Healthcare Professionals", value: "HealthcareProfessionals" },
  { title: "IT specialists", value: "ItSpecialists" },
  { title: "Life Coaches", value: "LifeCoaches" },
  {
    title: "Marketing Professionals and PR Specialists",
    value: "MarketingProfessionalsAndPRSpecialists",
  },
];

export const CoursesPage = () => {
  const [selectedTitle, setSelectedTitle] = useState("Flexible");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [selectedDirection, setSelectedDirection] = useState("all");
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Course 1",
      imageUrl: "https://example.com/image1.jpg",
      courseType: "coaching",
      skills: [{ name: "Skill 1" }],
      startDate: "2024-08-01",
      endDate: "2024-08-15",
    },
    {
      id: 2,
      name: "Course 2",
      imageUrl: "https://example.com/image2.jpg",
      courseType: "FLEXIBLE",
      skills: [{ name: "Skill 2" }],
      startDate: "2024-09-01",
      endDate: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      imageUrl: "https://example.com/image3.jpg",
      courseType: "FLEXIBLE",
      skills: [{ name: "Skill 3" }],
      startDate: "2024-10-01",
      endDate: "2024-10-15",
    },
    {
      id: 4,
      name: "Course 4",
      imageUrl: "https://example.com/image4.jpg",
      courseType: "FIXED",
      skills: [{ name: "Skill 4" }],
      startDate: "2024-11-01",
      endDate: "2024-11-15",
    },
    {
      id: 5,
      name: "Course 5",
      imageUrl: "https://example.com/image5.jpg",
      courseType: "FLEXIBLE",
      skills: [{ name: "Skill 5" }],
      startDate: "2024-12-01",
      endDate: "2024-12-15",
    },
    {
      id: 6,
      name: "Course 6",
      imageUrl: "https://example.com/image6.jpg",
      courseType: "FIXED",
      skills: [{ name: "Skill 6" }],
      startDate: "2024-12-16",
      endDate: "2024-12-31",
    },
  ]);
  // const courses = useAppSelector((state) => state.courses.courses);
  // const dispatch = useAppDispatch();
  //
  // useEffect(() => {
  //   dispatch(coursesActions.fetchCourses());
  // }, [dispatch]);

  const handleNewTitle = (newTitle: string) => {
    setSelectedTitle(newTitle);
  };

  const filteredCourses = courses.filter((course) => {
    const matchesFormat =
      selectedFormat === "all" || course.courseType === selectedFormat;
    const matchesDirection =
      selectedDirection === "all" ||
      course.skills.some((skill) => skill.name === selectedDirection);

    return matchesFormat && matchesDirection;
  });

  return (
    <section className="courses">
      <div className="courses__title-container">
        <h1 className="courses__title page__title_medium">Courses</h1>
        <h2 className="courses__subtitle">About Format</h2>
      </div>
      <div className="courses-flexible__paragraph-desktop">
        {optionsParagraph.map((option) => (
          <div key={option.title} className="courses-flexible__item-desktop">
            <h1 className="courses-flexible__item__title-desktop">
              {option.title}
            </h1>
            <p className="courses-flexible__item__paragraph-desktop">
              {option.text}
            </p>
          </div>
        ))}
      </div>
      <div className="courses__dropdown-container">
        <DropDown
          subtitle="Format"
          paramKey="format"
          options={formatOptions}
          setSelectedOption={setSelectedFormat}
        />
        <DropDown
          subtitle="Direction"
          paramKey="direction"
          options={directionOptions}
          setSelectedOption={setSelectedDirection}
        />
      </div>
      <CourseList courses={filteredCourses} />
      <div className="courses-flexible-container">
        <div className="courses-flexible__item-container">
          {optionsTitle.map((title, index) => (
            <h1
              key={index}
              className={cn("courses-flexible__item", {
                "courses-flexible__item-active": selectedTitle === title,
              })}
              onClick={() => handleNewTitle(title)}
            >
              {title}
            </h1>
          ))}
        </div>
        <div className="courses-flexible__paragraph">
          {selectedTitle === "Flexible" && (
            <p>
              This course format offers all lessons in recorded format, allowing
              you to progress at your own pace and schedule without the need to
              sync with a group. Every assignment will be personally reviewed by
              the course author, Anastasiia. Additionally, you will have access
              to a Telegram chat for any course-related questions you might
              have. Meditation sessions are included in this package.*
            </p>
          )}
          {selectedTitle === "Flexible with Webinars" && (
            <p>
              An extended version of the course, this format includes recorded
              lessons as well as live sessions for practice with other
              participants and the author. All assignments are reviewed by
              Anastasiia. You will be added to a Telegram chat group with other
              participants to discuss any questions or topics. Meditation
              sessions are also included in this format.*
            </p>
          )}
          {selectedTitle === "Coaching" && (
            <p>
              This is a personalized mentorship with Anastasiia, offering
              exclusively live sessions tailored to your requests. You will also
              have access to a Telegram chat where you can ask any questions
              related to the course.
            </p>
          )}
        </div>
      </div>
      <p className="courses-flexible__subtitle">
        *Access to all materials in any course for three months after
        completion.
      </p>
    </section>
  );
};
