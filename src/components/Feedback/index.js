import React, { useRef, useState } from 'react';
import feedback from './feedback.module.scss';
import { FeedbackDB } from './const.js';
import Swiper from 'react-id-swiper';
import { LeftSwiper, RightSwiper } from '../Svg/MiniSwipers';
const Feedback = () => {
    return (
        <div className={feedback.layout}>
            <div className={feedback.container}>
                <p className={feedback.header}>Отзывы наших партнеров</p>
                <FeedbackSwiper/>
            </div>
        </div>
    )
}

const FeedbackSwiper = () => {
    const swiperRef = useRef(null);
    const [slideIndex, seSlideIndex] = useState(null);
    const goSlide = (index) => {
         if(swiperRef.current && swiperRef.current.swiper) {
             swiperRef.current.swiper.slideTo(index);
             //console.log(swiperRef.current.swiper.realIndex)
             seSlideIndex(swiperRef.current.swiper.realIndex);
         }
    }
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideNext();
          seSlideIndex(swiperRef.current.swiper.realIndex);
        }
      };
      const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slidePrev();
          seSlideIndex(swiperRef.current.swiper.realIndex);
        }
      };
    const params = {
        slidesPerView: 1,
        loop: true,
        slidesPerView: 'auto',
      };
    const slides = FeedbackDB.map(( e )=>{
        return <div className={feedback.slide}>
            <div className={feedback.content}>
            <img className={feedback.image} src={e[0].png}/>
                <div className={feedback.card}>
                    <p className={feedback.status}>{e[0].text[0]}</p>
                    <h1 className={feedback.name}>{e[0].text[1]}</h1>
                    <p className={feedback.text}>{e[0].text[2]}</p>
                    <div className={feedback.more}>{`читать далее`}</div>
                </div>
            </div>
            <div className={feedback.content}>
                <img className={feedback.image} src={e[1].png}/>
                <div className={feedback.card}>
                    <p className={feedback.status}>{e[1].text[0]}</p>
                    <h1 className={feedback.name}>{e[1].text[1]}</h1>
                    <p className={feedback.text}>{e[1].text[2]}</p>
                    <div className={feedback.more}>{`читать далее`}</div>
                </div>
            </div>
        </div>
    })
    const pagination = FeedbackDB.map((e, i)=>{
        if (swiperRef.current && swiperRef.current.swiper){
            return swiperRef.current.swiper.realIndex === i ? <div key={i} className={feedback.paginationActiveElement}></div>
            : <div key={i} className={feedback.paginationInActiveElement} onClick={(e)=>{goSlide(i)}}></div>
        } else {
            return  i === 0 ? <div key={i} className={feedback.paginationActiveElement}></div>
            : <div key={i} className={feedback.paginationInActiveElement} onClick={(e)=>{goSlide(i)}}></div>
        }
        
    })
    return <div className={feedback.swiper}>
      <Swiper ref={swiperRef} {...params}>
        {
          slides
        }
      </Swiper>
      <div className={feedback.buttons}>
          <div className={feedback.allFeedback}>
              <label>{`Все Отзывы`}</label>
          </div>
          <div className={feedback.pagination}>
            {pagination}
          </div>
          <div className={feedback.navigation}>
            <div onClick={goPrev}><LeftSwiper/></div>
            <div onClick={goNext}><RightSwiper/></div>
          </div>
      </div>
    </div>
}
export default Feedback;