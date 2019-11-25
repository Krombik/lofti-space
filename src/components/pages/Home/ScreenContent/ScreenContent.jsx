import React from 'react';

import Header from '../../../Header'
import ProgressDots from '../ProgressDots'
import SideTitle from '../../../SideTitle'
import SideBack from '../../../SideBack'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import './style.scss';

const ScreenContent = props => {
  const {
    isReverse,
    index,
    align,
    screenCount,
    screenNumber,
    sideBack,
    background,
    sideTitle
  } = props;
  const TitleBlock = props.titleBlock;
  const classNames = ['screen', `screen${index < screenNumber ? '__prev' : index > screenNumber ? '__next' : '__active'}`]
  if (sideBack !== undefined)
    if (sideBack.isRight) classNames.push('red__right');
    else classNames.push('red__left');
  return (
    <CSSTransition
      key={index}
      timeout={500}
      classNames="screen"
      in={index !== screenNumber}
    >
      <div className={classNames.join(' ')} {...background !== undefined ? { style: { backgroundImage: `url("${background}")` } } : {}}>
        <Header />
        <ProgressDots screenCount={screenCount} />
        {sideBack !== undefined && <SideBack block={sideBack} />}
        {sideTitle !== undefined && <SideTitle title={sideTitle.title} isRight={sideTitle.isRight} />}
        <div className="screen__wrapper">
          <div className="container">
            <div className={`row align-items-center justify-content-${align} ${isReverse ? 'flex-row-reverse' : ''}`}>
              {TitleBlock !== undefined &&
                <div className={`${TitleBlock.className} screen__title`}>
                  <TitleBlock.title.type>{TitleBlock.title.text}</TitleBlock.title.type>
                  {TitleBlock.desc !== undefined && <div className={`font__${TitleBlock.desc.length > 75 ? 'small' : 'normal'} desc`}>{TitleBlock.desc}</div>}
                  {TitleBlock.btn !== undefined && <a className="btn btn__red" href="/">{TitleBlock.btn}</a>}
                </div>
              }
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

ScreenContent.defaultProps = {
  align: 'between'
};

const mapStateToProps = state => ({
  screenNumber: state.app.screenNumber,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScreenContent);
