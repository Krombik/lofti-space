import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './FirstScreen.styles';

class FirstScreen extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('FirstScreen will mount');
  }

  componentDidMount = () => {
    console.log('FirstScreen mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('FirstScreen will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('FirstScreen will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('FirstScreen did update');
  }

  componentWillUnmount = () => {
    console.log('FirstScreen will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="FirstScreenWrapper">
        Test content
      </div>
    );
  }
}

FirstScreen.propTypes = {
  // bla: PropTypes.string,
};

FirstScreen.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstScreen);
