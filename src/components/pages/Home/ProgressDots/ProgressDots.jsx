import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setScreenNumber } from '../../../../redux/app/actions'
//import { Test } from './ProgressDots.styles';

class ProgressDots extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  onScreenChange(screenNumber) {
    const { setScreenNumber } = this.props;
    setScreenNumber(screenNumber);
  }

  render() {
    const { screens, screenNumber } = this.props;
    const dots = screens.map((_, index) => {
      const isActive = index === screenNumber ? true : false;
      return (
        <li
          key={index}
          className={isActive ? 'active' : null}
          onClick={() => { !isActive && this.onScreenChange(index) }}>
          {index}
        </li>
      )
    })
    return (
      <nav className="progress">
        <ul>
          {dots}
        </ul>
      </nav>
    );
  }
}

ProgressDots.propTypes = {
  // bla: PropTypes.string,
};

ProgressDots.defaultProps = {
  // bla: 'test',
};

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
