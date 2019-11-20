import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setScreenNumber } from '../../../../redux/app/actions'
import './style.scss';
import { ReactComponent as Logo } from './img/logo.svg'

class ProgressDots extends PureComponent {
  onScreenChange(screenNumber) {
    const { setScreenNumber } = this.props;
    setScreenNumber(screenNumber);
  }

  render() {
    const { screenCount, screenNumber } = this.props;
    const dots = [];
    for (let index = 0; index < screenCount; index++) {
      const isActive = index === screenNumber ? true : false;
      dots.push(
        <li
          key={index}
          className={isActive ? 'active' : null}
          onClick={() => { !isActive && this.onScreenChange(index) }}>
        </li>
      )
    }
    return (
      <nav className="progress">
        <ul>
          {dots}
        </ul>
        <Logo className="logo" />
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  screenNumber: state.app.screenNumber,
});

const mapDispatchToProps = {
  setScreenNumber
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProgressDots);
