import React, { useState } from "react";
import "./MyCourseDetails.scss";
import { Module } from "../../utils/types/FlexibleCourses";
import useWindowSize from "../../utils/types/hooks/useWindowSize";
import { MyCourseDetailsStyles } from "./MyCourseDetailsAdaptation";
import cn from 'classnames';
import { WebinarDisplay } from "./WebinarDisplay/WebinarDisplay";

interface Props {
  module: Module;
}

export const MyCourseDetails: React.FC<Props> = ({ module: modules }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openThemaIds, setOpenThemaIds] = useState<number[]>([]);

  const { width } = useWindowSize();
  const styles = MyCourseDetailsStyles(width);

  const titleClass = styles.getTitleClass();
  const subtitleClass = styles.getSubtitleClass();
  const percentageStyle = styles.getPercentageClass();

  const toggleThema = (themaId: number) => {
    if (openThemaIds.includes(themaId)) {
      setOpenThemaIds(openThemaIds.filter(id => id !== themaId));
    } else {
      setOpenThemaIds([...openThemaIds, themaId]);
    }
  };

  return (
    <div className="my-course-details">
      <div
        className={`my-course-details__header ${isOpen ? "my-course-details__header--open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >

        <div className="my-course-details__icon" />

        <div className="my-course-details__title">
          <h4 className={cn(titleClass, 'my-course-details__title__module')}>
            Module {modules.id}
          </h4>
          <h4 className={titleClass}>{modules.module.name}</h4>
        </div>
        <div className="my-course-details__expand-collapse-icon" />
      </div>

      <div className="my-course-details__progress">
        <span className={cn(percentageStyle, 'my-course-details__progress__percentage')}>
          {modules.completionPercentage}%
        </span>

        <div className="my-course-details__progress__bar">
          <div
            className="my-course-details__progress__bar__fill"
            style={{ width: `${modules.completionPercentage}%` }}
          />
        </div>
      </div>

      {isOpen && (
        <div className="my-course-details__content">
          {modules.module.webinar && (
            <WebinarDisplay webinar={modules.module.webinar} />
          )}

          {modules.module.themas.map((thema) => (
            <div key={thema.id} className="thema">
              <h5
                className={cn(subtitleClass, 'thema__title')}
                onClick={() => toggleThema(thema.id)}>
                {thema.name}
              </h5>

              {openThemaIds.includes(thema.id) && (
                <ul className="thema__lessons">
                  {thema.lessons.map((lesson) => (
                    <li key={lesson.id} className="thema__lesson">
                      <div className="thema__lesson__icon" />
                      <div className="thema__lesson__title">{lesson.name}</div>
                    </li>
                  ))}
                  <li className="thema__lesson">
                    <div className="thema__lesson__icon" />
                    <div className="thema__lesson__title">Homework</div>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
