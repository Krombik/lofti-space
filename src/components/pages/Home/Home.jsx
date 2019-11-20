import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Header from '../../Header'
import ProgressDots from './ProgressDots'
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';
import FifthScreen from './FifthScreen';
import SixthScreen from './SixthScreen';
import './style.scss';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.screens = [
      FirstScreen,
      SecondScreen,
      ThirdScreen,
      FourthScreen,
      FifthScreen,
      SixthScreen
    ];
  }
  render() {
    const { screenNumber } = this.props;
    return (
      <>
        {
          this.screens.map((Screen, index) => (
            <CSSTransition
              key={index}
              timeout={500}
              classNames="screen"
              in={index !== screenNumber}
            >
              <Screen className={`container screen screen${index < screenNumber ? '__prev' : index > screenNumber ? '__next' : '__active'}`}>
                <Header />
                <ProgressDots screens={this.screens} />
              </Screen>
            </CSSTransition>
          ))
        }
      </>
    );
  }
}

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  screenNumber: state.app.screenNumber,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
