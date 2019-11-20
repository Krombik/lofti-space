import React from 'react';

import Header from '../../../Header'
import ProgressDots from '../ProgressDots'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import './style.scss';

const ScreenContent = props => {
  const { titleBlock, isReverse, index, screenCount, screenNumber, rightIsRed, leftIsRed, background, className } = props;
  console.log(background)
  const classNames = ['container', className, 'screen', `screen${index < screenNumber ? '__prev' : index > screenNumber ? '__next' : '__active'}`]
  if (rightIsRed) classNames.push('red__right');
  if (leftIsRed) classNames.push('red__left');
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
        <div className="screen__wrapper">
          <div className={`${isReverse ? 'flex-row-reverse ' : ''}row align-items-center`}>
            {titleBlock !== undefined &&
              <div className={`${titleBlock.className} screen__title`}>
                <h2>{titleBlock.h2}</h2>
                {titleBlock.desc !== undefined && <div className={`font__${titleBlock.desc.length > 75 ? 'small' : 'normal'} desc`}>{titleBlock.desc}</div>}
                {titleBlock.btn !== undefined && <a className="btn__red" href="/">{titleBlock.btn}</a>}
              </div>
            }
            {props.children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

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
