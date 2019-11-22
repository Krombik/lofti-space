import React from 'react';
import YouTube from 'react-youtube';
import ScreenContent from '../ScreenContent'
//import { Test } from './SecondScreen.styles';

const SecondScreen = props => {
  const titleBlock = {
    className: 'col-md-4',
    h2: 'О нас',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    btn: 'Подробнее'
  };
  const opts = {
    height: '435px',
    width: '100%'
  };
  const sideTitle = {
    title: 'about us',
    isRight: true
  }
  const sideBack = {
    col: 5
  }
  return (
    <ScreenContent isReverse={true} titleBlock={titleBlock} sideBack={sideBack} sideTitle={sideTitle} {...props}>
      <div className="col-md-6">
        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
        />
      </div>
    </ScreenContent>
  )
};

export default SecondScreen;
