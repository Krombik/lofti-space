import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../Header'
import ProgressDots from '../ProgressDots'
import './style.scss';

class App extends PureComponent {
  render() {
    const item = [<div>kek</div>, <div>bek</div>]
    const { screenNumber } = this.props;
    console.log(screenNumber)
    return (
      <div className="root">
        <Header />
        {/* <Home/> */}
        <ProgressDots screens={item} />
      </div>
    );
  }
}

App.propTypes = {
  // bla: PropTypes.string,
};

App.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
  screenNumber: state.app.screenNumber,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
