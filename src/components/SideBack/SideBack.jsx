import React from 'react';
import './style.scss';

const SideBack = props => {
  const { isRight, col } = props.block;
  return (
    <div className={`container side-back ${isRight ? 'right' : 'left'}`}>
      <div className={`row${isRight ? ' flex-row-reverse' : ''}`}>
        <div className={`col-md-${col}`}>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default SideBack;
