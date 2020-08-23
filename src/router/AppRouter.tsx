import React, { FC, useRef } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { PAGE_TRANSITION_DURATION } from "utils/constant";
import PageChangeAnimation from "components/styled/PageChangeAnimation";

const AppRouter: FC = () => {
  const location = useLocation();
  const pages = [
    { path: "/", Component: Home },
    { path: "/aboutus", Component: AboutUs },
  ];
  const prevPageIndex = useRef<number>(-1);
  const currPageIndex = pages.findIndex(
    (item) => item.path === location.pathname
  );
  const isMore = prevPageIndex.current > currPageIndex;
  prevPageIndex.current = currPageIndex;
  return (
    <TransitionGroup component={PageChangeAnimation} isMore={isMore}>
      <CSSTransition key={location.key} timeout={PAGE_TRANSITION_DURATION}>
        <Switch location={location}>
          {pages.map(({ path, Component }, index) => (
            <Route key={index} exact path={path} render={() => <Component />} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
