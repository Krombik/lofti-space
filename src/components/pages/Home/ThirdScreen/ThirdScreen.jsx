import React, { useRef } from 'react';
import ScreenContent from '../ScreenContent'
import Slider from "react-slick";
import SliderButtons from '../../../SliderButtons'
import sliderImgs from './slider-img'
import './style.scss'

const ThirdScreen = props => {
  const slider = useRef(null);
  const titleBlock = {
    className: 'col-md-4',
    title: {
      type: 'h3',
      text: 'Найдите Ваше персональное место'
    },
    btn: 'ПЕРЕЙТИ В ГАЛЕРЕЮ'
  };
  const sliderSettings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };
  const sideTitle = {
    title: 'space'
  }
  return (
    <ScreenContent titleBlock={titleBlock} sideTitle={sideTitle} {...props}>
      <div className="col-md-8 space__slider">
        <Slider ref={slider} {...sliderSettings}>
          {
            sliderImgs.map((item, index) => (
              <>
                <img alt="" src={item.img} key={index} />
                <div className="space__slider__content" data-index={`${index < 10 ? '0' : ''}${index + 1}`}>
                  <h4 className="name" dangerouslySetInnerHTML={{ __html: item.name.replace(' ', '<br />') }}></h4>
                  <a className="btn" href={item.href}>перейти ></a>
                </div>
              </>
            ))
          }
        </Slider>
      </div>
      <SliderButtons slider={slider} />
    </ScreenContent>
  );
}

export default ThirdScreen;
