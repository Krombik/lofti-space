import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ProgressDots from './ProgressDots'
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import './style.scss';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.screens = [
      <FirstScreen />,
      <SecondScreen />,
    ];
  }
  render() {
    const { screenNumber } = this.props;
    const Screen = this.screens[screenNumber].type;
    return <Screen className="container"><ProgressDots screens={this.screens} /></Screen>;
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
