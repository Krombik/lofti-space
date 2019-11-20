import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ScreenContent from '../ScreenContent'
import Slider from "react-slick";
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
  const [width, setWidth] = useState('auto');

  const ref = React.createRef();

  useEffect(() => {
    const el = ref.current;
    const elSmallHeight = el.previousSibling !== null ? el.previousSibling.offsetHeight : el.nextSibling !== null ? el.nextSibling.offsetHeight : 0;
    console.dir(el)
    setHeight(el.offsetHeight + 4 * elSmallHeight);
    setWidth(el.offsetHeight);
  }, [ref]);

  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: 'slick-list',
    appendDots(dots) {
      const left = this.currentSlide - 2 < 0 ? 0 : this.currentSlide - 2;
      return (
        <div style={{ maxHeight: height, width }}>
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
  return (
    <ScreenContent titleBlock={titleBlock} background={back1} rightIsRed  {...props}>
      <div className="col-md-4 first__slider">
        <Slider {...sliderSettings}>
          {sliderImgs.map((item, index) => (<img alt="" src={item} key={index} />))}
        </Slider>
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
