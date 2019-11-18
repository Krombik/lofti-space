import React from 'react';
import ScreenContent from '../ScreenContent'
//import { Test } from './SecondScreen.styles';

const SecondScreen = props => {
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
      <ScreenContent isReverse={true} titleBlock={titleBlock} contentBlock={contentBlock} />
    </div>
  )
};

export default SecondScreen;
