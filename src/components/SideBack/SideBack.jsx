import React from 'react';
import variables from '../../global/_variables.scss';
import './style.scss';

const SideBack = props => {
  const percent = 100 * props.block.col / 12;
  const color = variables.colorRedBackgorund;
  const { isRight } = props.block;
  return (
    <div className={`container side-back ${isRight ? 'right' : 'left'}`}>
      <div style={{ background: `linear-gradient(${isRight ? '-' : ''}90deg, ${color} ${percent}%, rgba(0,0,0,0.0001) ${percent}%)` }}></div>
    </div>
  );
}

export default SideBack;
