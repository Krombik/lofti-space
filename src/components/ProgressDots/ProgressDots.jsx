import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setScreenNumber } from '../../redux/app/actions'
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
    const { screens } = this.props;
    return (
      <nav className="progress">
        <ul>
          {screens.map((_, index) => (<li key={index} onClick={() => { this.onScreenChange(index) }}>{index}</li>))}
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
  // blabla: state.blabla,
});

const mapDispatchToProps = {
  setScreenNumber
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProgressDots);
