import React from 'react';
import './style.scss';

const SideTitle = props => (
  <div className="side-title">
    <div className="side-title__wrapper">
      <div className="side-title__container">
        <span style={{ fontSize: `${100 / props.title.length}vh` }}> {props.title}</span>
      </div>
    </div>
  </div>
);

SideTitle.propTypes = {
  // bla: PropTypes.string,
};

SideTitle.defaultProps = {
  // bla: 'test',
};

export default SideTitle;
