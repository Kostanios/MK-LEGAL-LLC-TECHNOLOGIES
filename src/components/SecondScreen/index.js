import React, { useRef } from 'react';
import screen from './screen.module.scss'
import Swiper from 'react-id-swiper';
import { Slides as SlidesData } from './const';
import { Left, Right } from '../Svg/Swipers';

const SecondScreen = () => {
    const slides = SlidesData.map((el)=>{
        return <div className={screen.slide} key={el.url}>
          <img className={screen.image} src={el.url}/>
        </div>});
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
            <div onClick={goPrev}><Left/></div>
            <div onClick={goNext}><Right/></div>
        </div>
    </div>
    )
}

export default SecondScreen;