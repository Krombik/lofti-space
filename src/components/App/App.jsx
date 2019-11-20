import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import Home from '../pages/Home'
import Menu from '../Header/Menu'

class App extends PureComponent {
  render() {
    return (
      <>
        <Menu />
        <Home />
      </>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
