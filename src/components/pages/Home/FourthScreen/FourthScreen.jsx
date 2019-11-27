import React, { useRef, useLayoutEffect, useState } from 'react';
import ScreenContent from '../ScreenContent';
import SliderButtons from '../../../SliderButtons';
import Slider from "react-slick";
import { connect } from 'react-redux';
import './style.scss';

const FourthScreen = props => {
  const titleBlock = {
    className: 'col-md-6',
    title: {
      type: 'h3',
      text: 'Выберите свой оптимальный вариант'
    }
  };
  const sliderContent = [
    {
      title: 'Дневной пропуск',
      price: 300,
      href: '/'
    },
    {
      title: 'Недельный пропуск',
      price: 1000,
      href: '/'
    },
    {
      title: 'Месячный абонемент',
      price: 3500,
      href: '/'
    },
    {
      title: 'Абонемент на 3 месяца',
      price: 9975,
      href: '/'
    },
    {
      title: 'Абонемент на 3 месяца',
      price: 9975,
      href: '/'
    },
    {
      title: 'Абонемент на 3 месяца',
      price: 9975,
      href: '/'
    }
  ];
  const sliderSettings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    variableWidth: true,
    focusOnSelect: true
  };
  const sideTitle = {
    title: 'tariffs',
    isRight: true
  }
  const sideBack = {
    col: 2,
    isRight: true
  }
  const targetRef = useRef(null);
  const slider = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setContainerWidth(targetRef.current.parentElement.offsetWidth);
    }
    if (containerWidth === 0) updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [containerWidth]);
  const slideWIdth = containerWidth / 4;
  return (
    <ScreenContent titleBlock={titleBlock} sideBack={sideBack} sideTitle={sideTitle} {...props}>
      <div ref={targetRef} className="col-12 tariffs__slider">
        <Slider ref={slider} {...sliderSettings}>
          {
            sliderContent.map((item, index) => (
              <div className="tariffs__slide" key={index} style={{ width: slideWIdth }} >
                <div>
                  <h4>{item.title}</h4>
                  <div className="price font__normal">От <span className="h4">{item.price}</span></div>
                  <a className="btn" href={item.href}>Подробнее</a>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
      <div className="col-1 slider__arrows white">
        <SliderButtons slider={slider} />
      </div>
    </ScreenContent>
  );
}

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FourthScreen);
