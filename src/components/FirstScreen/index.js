import React, {useRef} from 'react';
import screen from './screen.module.scss'
import Swiper from 'react-id-swiper';
import { Slides as SlidesData } from './const';
import { LeftSwiper, RightSwiper } from '../Svg/MiniSwipers';

const FirstScreen = () => {
  const slides = SlidesData.map((el)=>{
    return <div className={screen.slide} key={el.url}>
      <div className={screen.adviceBlock}>
        <p className={screen.adviceType}>{el.text[0]}</p>
        <p className={screen.advice}>{el.text[1]}</p>
        <div className={screen.moreButton}><span>{`подробнее`}</span></div>
      </div>
      <img className={screen.image} src={el.url}/>
    </div>})
    const swiperRef = useRef(null);
    const goNext = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    };
    const params = {
        slidesPerView: 1,
        loop: true,
        slidesPerView: 'auto',
      };
    return (
      <div className={screen.swiperContainer}>
          <Swiper ref={swiperRef} {...params}>
            {slides}
          </Swiper>
          <div className={screen.navigation}>
            <div onClick={goPrev}><LeftSwiper/></div>
            <div onClick={goNext}><RightSwiper/></div>
          </div>
      </div>
    )
};

export default FirstScreen;
