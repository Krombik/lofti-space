import React from 'react';
import { connect } from 'react-redux';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';
import FifthScreen from './FifthScreen';
import SixthScreen from './SixthScreen';
import './style.scss';
const Home = props => {
  const screens = [
    FirstScreen,
    SecondScreen,
    ThirdScreen,
    FourthScreen,
    FifthScreen,
    SixthScreen
  ];
  return (
    <>
      {
        screens.map((Screen, index) => (
          <Screen
            index={index}
            key={index}
            screenCount={screens.length}
          />
        ))
      }
    </>
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
