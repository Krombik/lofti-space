import React, { useLayoutEffect, useState, useRef } from 'react';
import './style.scss';

const SliderButtons = props => {
  const button = useRef(null);
  const [height, setHeight] = useState('auto');
  useLayoutEffect(() => {
    const updateSize = () => {
      const width = button.current.offsetWidth / 2;
      setHeight(width % 2 === 0 ? width + 1 : width);
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [height]);
  const arrowClick = (goTo) => {
    if (goTo === 'next')
      props.slider.current.slickNext();
    if (goTo === 'prev')
      props.slider.current.slickPrev();
  }
  return (
    <div className="col-1 slider__arrows">
      <div className="slick-arows" ref={button} style={{ height }}>
        <button onClick={() => arrowClick('prev')} className='slick-arrow slick-prev'></button>
        <button onClick={() => arrowClick('next')} className='slick-arrow slick-next'></button>
      </div>
    </div>
  );
}

export default SliderButtons;
