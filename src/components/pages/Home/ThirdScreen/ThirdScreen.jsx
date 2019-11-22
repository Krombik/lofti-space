import React from 'react';
import ScreenContent from '../ScreenContent'
import Slider from "react-slick";
import sliderImgs from './slider-img'
import './style.scss'

const ThirdScreen = props => {
  const titleBlock = {
    className: 'col-md-4',
    h2: 'Найдите Ваше персональное место',
    btn: 'ПЕРЕЙТИ В ГАЛЕРЕЮ'
  };
  const sliderSettings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <ScreenContent titleBlock={titleBlock} {...props}>
      <div className="col-md-8 space__slider">
        <Slider {...sliderSettings}>
          {sliderImgs.map((item, index) => (<img alt="" src={item} key={index} />))}
        </Slider>
      </div>
    </ScreenContent>
  );
}

export default ThirdScreen;
