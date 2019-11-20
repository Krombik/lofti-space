import React from 'react';
import ScreenContent from '../ScreenContent'
import Slider from "react-slick";
import { connect } from 'react-redux';
//import { Test } from './FourthScreen.styles';

const FourthScreen = props => {
  const titleBlock = {
    className: 'col-md-6',
    h2: 'Выберите свой оптимальный вариант'
  };
  const sliderContent = [
    {
      title: 'Дневной пропуск',
      price: 300,
      href: '#'
    },
    {
      title: 'Недельный пропуск',
      price: 1000,
      href: '#'
    },
    {
      title: 'Месячный абонемент',
      price: 3500,
      href: '#'
    },
    {
      title: 'Абонемент на 3 месяца',
      price: 9975,
      href: '#'
    },
    {
      title: 'Абонемент на 3 месяца',
      price: 9975,
      href: '#'
    },
    {
      title: 'Абонемент на 3 месяца',
      price: 9975,
      href: '#'
    }
  ];
  const sliderSettings = {
    speed: 500,
    slidesToShow: 2.8,
    slidesToScroll: 1,
  };
  return (
    <ScreenContent titleBlock={titleBlock} {...props}>
      <div className="col-12">
        <Slider {...sliderSettings}>
          {
            sliderContent.map((item, index) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <div className="price">От {item.price} ₴</div>
                <a href={item.href}>Подробнее</a>
              </div>
            ))
          }
        </Slider>
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
