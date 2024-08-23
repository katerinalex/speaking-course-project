import useWindowSize from '../../utils/types/hooks/useWindowSize';
import './MeditationsBlock.scss';
import cn from 'classnames';
import { MeditationsBlockAdaptation } from './MeditationsBlockAdaptation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Props {
  id: number[];
  meditations: string[];
}

export const MeditationsBlock: React.FC<Props> = ({ id, meditations }) => {
  const { width } = useWindowSize();
  const styles = MeditationsBlockAdaptation(width);
  const titleClass = styles.getTitleClass();
  const subtitleClass = styles.getSubtitleClass();

  return (
    <div className="meditation">
      {width > 639 ? (
        <div className="meditation__list">
          {meditations.map((meditation, index) => (
            <div className="meditation__item" key={index}>
              <img
                className="meditation__photo"
                src="images/example-images/my-courses-example.png"
                alt=""
              />
              <div className="meditation__title">
                <h5 className={cn(subtitleClass, 'meditation__module-title')}>
                  Module {id[index]}
                </h5>
                <h5 className={titleClass}>
                  {meditation}
                </h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          slidesPerView="auto"
          spaceBetween={8} // Отступы между слайдами
        >
          {meditations.map((meditation, index) => (
            <SwiperSlide key={index} style={{ width: '188px' }}>
              <div className="meditation__item">
                <img
                  className="meditation__photo"
                  src="images/example-images/my-courses-example.png"
                  alt=""
                />
                <div className="meditation__title">
                  <h5 className={cn(subtitleClass, 'meditation__module-title')}>
                    Module {id[index]}
                  </h5>
                  <h5 className={titleClass}>
                    {meditation}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <p className="meditation__explanation body-text body-text--small-text">
        *Meditations are available according to the module
      </p>
    </div>
  );
}
