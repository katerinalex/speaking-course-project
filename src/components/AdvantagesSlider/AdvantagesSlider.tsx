// import './advantages.scss';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { useEffect, useRef, useState } from 'react';

// export const AdvantagesSlider = () => {
//     // const [showSwiper, setShowSwiper] = useState(false);

//     // useEffect(() => {
//     //   const handleResize = () => {
//     //     setShowSwiper(window.innerWidth < 1440);
//     //   };

//     //   // Добавляем обработчик события изменения размера окна при монтировании компонента
//     //   window.addEventListener('resize', handleResize);

//     //   // Вызываем обработчик события изменения размера окна при первой загрузке компонента
//     //   handleResize();

//     //   // Отписываемся от обработчика события при размонтировании компонента
//     //   return () => window.removeEventListener('resize', handleResize);
//     // }, []);

//     const [isScrollable, setIsScrollable] = useState(false);

//     const [showSwiper, setShowSwiper] = useState(false);


//     const containerRef = useRef<HTMLDivElement>(null);

//      useEffect(() => {
//       const handleResize = () => {
//         setShowSwiper(window.innerWidth < 1440);
//       };

//       window.addEventListener('resize', handleResize);

//       handleResize();

//       return () => window.removeEventListener('resize', handleResize);
//     }, []);


//     useEffect(() => {
//       const container = containerRef.current;

//       const handleScroll = () => {
//         if (container) {
//           setIsScrollable(container.scrollWidth > container.clientWidth);
//         }
//       };

//       if (container) {
//         container.addEventListener('scroll', handleScroll);

//         handleScroll();
//       }

//       return () => {
//         if (container) {
//           container.removeEventListener('scroll', handleScroll);
//         }
//       };
//     }, []);

//   return (
//   // <>
//   //   <article className='advantages'>
//   //     <img src='images/graduates-200-img.png' className='advantages-img advantages-img-first' />
//   //     <img src='images/get-promotions-img.png' className='advantages-img advantages-img-second' />
//   //     <img src='images/free-maditations-img.png' className='advantages-img advantages-img-third' />
//   //   </article>
//   //   {showSwiper && <Swiper
//   //     className='advantages_mobile'
//   //     spaceBetween={8}
//   //     slidesPerView={1.2}
//   //     loop={true}
//   //     navigation={true}
//   //     pagination={{ clickable: true }}
//   //     onSlideChange={() => console.log('slide change')}
//   //   >
//   //     <SwiperSlide>
//   //       {/* Slide1 */}
//   //       <picture className='advantages-picture'>
//   //         <source />
//   //         <img src='images/graduates-200-img.png' className='advantages-img advantages-img-first' />
//   //       </picture>
//   //     </SwiperSlide>
//   //     <SwiperSlide>
//   //       {/* Slide2 */}
//   //       <img src='images/get-promotions-img.png' className='advantages-img advantages-img-second' />
//   //     </SwiperSlide>
//   //     <SwiperSlide>
//   //       {/* Slide3 */}
//   //       <img src='images/free-maditations-img.png' className='advantages-img advantages-img-third' />
//   //     </SwiperSlide>
//   //   </Swiper>}
//   // </>
//   <>
//   <article className='advantages'
//     >
//       <img src='images/graduates-200-img.png' className='advantages-img advantages-img-first' />
//       <img src='images/get-promotions-img.png' className='advantages-img advantages-img-second' />
//       <img src='images/free-maditations-img.png' className='advantages-img advantages-img-third' />
//     </article>
//   {showSwiper && <article className='advantages advantages_mobile'
//       style={{ overflowX: isScrollable ? 'scroll' : 'hidden', overflowY: 'hidden' }}
//     >
//       <img src='images/graduates-200-img.png' className='advantages-img advantages-img-first' />
//       <img src='images/get-promotions-img.png' className='advantages-img advantages-img-second' />
//       <img src='images/free-maditations-img.png' className='advantages-img advantages-img-third' />
//     </article>}
//   </>
    
//   )
// }

import './advantages.scss';
import { useEffect, useRef, useState } from 'react';

export const AdvantagesSlider = () => {
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
    <>
      <article className='advantages'>
        <img src='images/graduates-200-img.png' className='advantages-img advantages-img-first' />
        <img src='images/get-promotions-img.png' className='advantages-img advantages-img-second' />
        <img src='images/free-maditations-img.png' className='advantages-img advantages-img-third' />
      </article>
      {showSwiper &&
        <article
          ref={containerRef}
          className='advantages_mobile'
          style={{ overflowX: isScrollable ? 'scroll' : 'hidden', overflowY: 'hidden' }}
        >
          <img src='images/graduates-200-img.png' className='advantages-img advantages-img-first' />
          <img src='images/get-promotions-img.png' className='advantages-img advantages-img-second' />
          <img src='images/free-maditations-img.png' className='advantages-img advantages-img-third' />
        </article>}
      </>
  )
}