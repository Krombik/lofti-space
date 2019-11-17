import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScreenContent from '../ScreenContent'

const FirstScreen = props => {
  const titleBlock = {
    className: 'col-md-6',
    h2: 'Комфортная среда Вашей работы',
    desc: 'Оцените качественный сервис, записавшись на пробный день уже сегодня',
    btn: 'ПОПРОБОВАТЬ БЕСПЛАТНО >'
  };
  const contentBlock = <div className="col-md-6">sd</div>
  return (
    <div className={props.className}>
      {props.children}
      <ScreenContent titleBlock={titleBlock} contentBlock={contentBlock} />
    </div>
  )
};

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
