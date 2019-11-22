import React, { useState, useLayoutEffect, useRef } from 'react';
import './style.scss';

const SideTitle = props => {
  const [height, setHeight] = useState(document.documentElement.clientHeight);
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const canvas = useRef(null);
  useLayoutEffect(() => {
    const updateSize = () => {
      setHeight(document.documentElement.clientHeight);
      setWidth(document.documentElement.clientWidth);
    }
    window.addEventListener('resize', updateSize);
    const ctx = canvas.current.getContext('2d');
    const text = props.title.toUpperCase();
    document.fonts.ready.then(() => {
      ctx.font = "bold 1px Latinka";
      const fontSize = height / ctx.measureText(text).width;
      ctx.font = `bold ${fontSize}px Latinka`;
      ctx.textBaseline = props.isRight ? 'alphabetic' : 'top';
      ctx.translate(props.isRight ? width - fontSize / 12 : 0, height);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText(text, 0, 0);
    }, 100);
    return () => window.removeEventListener('resize', updateSize);
  }, [height, width, props.title, props.isRight]);
  return (
    <div className="side-title">
      <canvas ref={canvas} height={height} width={width}></canvas>
    </div>
  )
}

export default SideTitle;
