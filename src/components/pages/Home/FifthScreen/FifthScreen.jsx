import React from 'react';
import ScreenContent from '../ScreenContent'
import content from './slider-img'

const FifthScreen = props => {
  const titleBlock = {
    className: 'col-md-10',
    h2: 'Актуальные события'
  };
  return (
    <div className={props.className}>
      {props.children}
      <ScreenContent isReverse={true} titleBlock={titleBlock}>
        <div className="col-md-11">
          {content.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt=" " />
              <div className="date">{item.date}</div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </ScreenContent>
    </div>
  );
}

export default FifthScreen;