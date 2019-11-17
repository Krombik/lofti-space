import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import Home from '../pages/Home'
import Header from '../Header'

class App extends PureComponent {
  render() {
    const { screenNumber } = this.props;
    console.log(screenNumber)
    return (
      <div className="root">
        <Header />
        <Home />
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
