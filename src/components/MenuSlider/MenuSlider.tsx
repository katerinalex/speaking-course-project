import './slider.scss';
import { useEffect, useRef, useState } from 'react';

export const MenuSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showSwiper, setShowSwiper] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setShowSwiper(window.innerWidth < 1440);
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      const container = containerRef.current;

      const handleScroll = () => {
        if (container) {
          setIsScrollable(container.scrollWidth > container.clientWidth);
        }
      };

      if (container) {
        container.addEventListener('scroll', handleScroll);

        handleScroll();
      }

      return () => {
        if (container) {
          container.removeEventListener('scroll', handleScroll);
        }
      };
    }, []);

  return (
    <div
      ref={containerRef}
      className="slider"
      style={{ overflowX: isScrollable ? 'scroll' : 'hidden', overflowY: 'hidden' }}
    >
      <h1 className='slider__title'>Bloggers</h1>
      <h1 className='slider__title slider__title-second'>CEO and Managers</h1>
      <h1 className='slider__title'>Consultants and Advisors</h1>
      <h1 className='slider__title slider__title-second'>Entrepreneurs and Start-up Founders</h1>
    </div>
  )
}