import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import ScreenContent from '../ScreenContent'
import Slider from "react-slick";
import SliderButtons from './SliderButtons'
import sliderImgs from './slider-img'
import back1 from './img/back1.png'
import './style.scss'

const FirstScreen = props => {

  const titleBlock = {
    className: 'col-md-6',
    h2: 'Комфортная среда Вашей работы',
    desc: 'Оцените качественный сервис, записавшись на пробный день уже сегодня',
    btn: 'ПОПРОБОВАТЬ БЕСПЛАТНО >'
  };
  const [height, setHeight] = useState(0);

  const ref = useRef(null);
  const slider = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const elSmallHeight = el.previousSibling !== null ? el.previousSibling.offsetHeight : el.nextSibling !== null ? el.nextSibling.offsetHeight : 0;
    setHeight(el.offsetHeight + 4 * elSmallHeight);
  }, [ref]);

  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots(dots) {
      const left = this.currentSlide - 2 < 0 ? 0 : this.currentSlide - 2;
      return (
        <div style={{ maxHeight: height }}>
          <ul>
            {
              dots.map((Item, index) =>
                index !== left ? Item : (<Item.type ref={ref} key={index} {...Item.props} />))
            }
          </ul>
        </div>
      )
    },
    customPaging: i => (
      <div>
        <div>
          {`${i < 9 ? '0' : ''}${i + 1}`}
        </div>
      </div>
    ),
    onReInit() {
      ref.current.parentElement.scrollTo({
        left: 0,
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const sideTitle = {
    title: 'lofti',
    isRight: true
  }
  const sideBack = {
    col: 4,
    isRight: true
  }
  return (
    <ScreenContent titleBlock={titleBlock} background={back1} sideBack={sideBack} sideTitle={sideTitle}  {...props}>
      <div className="col-md-5 first__slider">
        <Slider ref={slider} {...sliderSettings}>
          {sliderImgs.map((item, index) => (<img alt="" src={item} key={index} />))}
        </Slider>
        <SliderButtons slider={slider} />
      </div>
    </ScreenContent>
  )
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstScreen);
