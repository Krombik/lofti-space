import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ScreenContent from '../ScreenContent'
import Slider from "react-slick";
import sliderImgs from './slider-img'

const FirstScreen = props => {
  const titleBlock = {
    className: 'col-md-6',
    h2: 'Комфортная среда Вашей работы',
    desc: 'Оцените качественный сервис, записавшись на пробный день уже сегодня',
    btn: 'ПОПРОБОВАТЬ БЕСПЛАТНО >'
  };
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(ref.current.offsetHeight * 5)
  });

  const ref = React.createRef();
  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots(dots) {
      const left = this.currentSlide - 2 < 0 ? 0 : this.currentSlide - 2;
      return (
        <div>
          <ul style={{ maxHeight: height }}>
            {
              dots.map((Item, index) =>
                index !== left ? Item : (<Item.type ref={ref} key={index} {...Item.props} />))
            }
          </ul>
        </div>
      )
    },
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
      >
        {`${i < 9 ? '0' : ''}${i + 1}`}
      </div>
    ),
    onReInit() {
      ref.current.parentElement.scrollTo(0, ref.current.offsetTop);
    }
  };
  return (
    <div className={props.className}>
      {props.children}
      <ScreenContent titleBlock={titleBlock}>
        <div className="col-md-6">
          <Slider {...sliderSettings}>
            {sliderImgs.map((item, index) => (<img src={item} key={index} />))}
          </Slider>
        </div>
      </ScreenContent>
    </div>
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
