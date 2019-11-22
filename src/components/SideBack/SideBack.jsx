import React from 'react';
import variables from '../../global/_variables.scss';
import './style.scss';

const SideBack = props => {
  const percent = 100 * props.block.col / 12;
  const color = variables.colorRedBackgorund;
  const { isRight } = props.block;
  return (
    <div className={`container side-back ${isRight ? 'right' : 'left'}`}>
      <div className={`row${isRight ? ' flex-row-reverse' : ''}`}>
        <div className={`col-md-${props.block.col}`}>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default SideBack;
