import React from "react";
import { Webinar } from '../../../utils/types/FlexibleCourses';
import './WebinarDisplay.scss';
import { WebinarDisplayStyles } from './WebinarDisplayStyles';
import useWindowSize from "../../../utils/types/hooks/useWindowSize";
import cn from 'classnames';

interface Props {
  webinar: Webinar;
}

export const WebinarDisplay: React.FC<Props> = ({ webinar }) => {
  const formattedDate = new Date(webinar.date);
  const formattedTime = `${webinar.time.hour}:${webinar.time.minute.toString().padStart(2, '0')}`;

  const { width } = useWindowSize();

  const styles = WebinarDisplayStyles(width);

  const dateClass = styles.getDateClass();
  const commentTitleClass = styles.getCommentClass();
  const kyivTimeClass = styles.getKyivTimeClass();

  return (
    <div className="webinar">
      <div className="webinar__zoom-icon"></div>

      <div className="webinar__content">
        <a href={webinar.link} className="webinar__name">
          {webinar.name}  (on Zoom)
        </a>

        <div className="webinar__dates">
          <span className="webinar__date">
            <p className={cn(commentTitleClass, 'webinar__date__comment')}>
              Date:
            </p>
            <p className={cn(dateClass, 'webinar__date__content')}>
              {formattedDate.toLocaleDateString("uk-UA")}
            </p>
          </span>

          <span className="webinar__date">
            <p className={cn(commentTitleClass, 'webinar__date__comment')}>
              Time:
            </p>

            <p className={cn(dateClass, 'webinar__date__content')}>
              {formattedTime}
            </p>

            <p className={cn(kyivTimeClass, 'webinar__date__kyiv-time')}>
              (Kyiv time)
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};
