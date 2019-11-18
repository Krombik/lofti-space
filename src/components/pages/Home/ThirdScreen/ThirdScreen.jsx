import React from 'react';
import ScreenContent from '../ScreenContent'
import Slider from "react-slick";
import sliderImgs from './slider-img'

const ThirdScreen = props => {
  const titleBlock = {
    className: 'col-md-4',
    h2: 'Найдите Ваше персональное место',
    btn: 'ПЕРЕЙТИ В ГАЛЕРЕЮ'
  };
  const sliderSettings = {
    speed: 500,
    slidesToShow: 2.8,
    slidesToScroll: 1,
  };
  const contentBlock = (
    <div className="col-md-8">
      <Slider {...sliderSettings}>
        {sliderImgs.map((item, index) => (<img src={item} key={index} />))}
      </Slider>
    </div>
  );
  return (
    <div className={props.className}>
      {props.children}
      <ScreenContent titleBlock={titleBlock} contentBlock={contentBlock} />
    </div>
  );
}

export default ThirdScreen;