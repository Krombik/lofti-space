import React from 'react';

import Header from '../../../Header'
import ProgressDots from '../ProgressDots'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

const ScreenContent = props => {
  const { titleBlock, isReverse, index, screenCount, screenNumber } = props;
  return (
    <CSSTransition
      key={index}
      timeout={500}
      classNames="screen"
      in={index !== screenNumber}
    >
      <div className={`container screen screen${index < screenNumber ? '__prev' : index > screenNumber ? '__next' : '__active'}`}>
        <Header />
        <ProgressDots screenCount={screenCount} />
        <div className={`${isReverse ? 'flex-row-reverse ' : ''}row`}>
          {titleBlock !== undefined &&
            <div className={`${titleBlock.className} screen-title`}>
              <h2>{titleBlock.h2}</h2>
              {titleBlock.desc !== undefined && <div className={`${titleBlock.desc.length > 75 ? 'font-small' : 'font-normal'} desc`}>{titleBlock.desc}</div>}
              {titleBlock.btn !== undefined && <a className="btn__red" href="/">{titleBlock.btn}</a>}
            </div>
          }
          {props.children}
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
