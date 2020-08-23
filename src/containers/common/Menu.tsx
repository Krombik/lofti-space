import React, { FC } from "react";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { State } from "types";
import "styled-components/macro";
import Slide from "@material-ui/core/Slide";
import Layout from "components/common/Layout";
import Grid from "components/styled/Grid";
import { MENU_TRANSITION_DURATION } from "utils/constant";
import MenuLink from "components/styled/MenuLink";
import RedGrid from "containers/common/RedGrid";
import Typography from "components/styled/Typography";

const selectData = createSelector(
  (state: State) => state.common.menu,
  (open) => ({ open })
);

const RED_BREAKPOINTS = {
  xs: { size: 12 },
};

const Menu: FC = () => {
  const menu = [
    { title: "Главная", href: "/" },
    { title: "Локации", href: "/" },
    { title: "Тарифы", href: "/" },
    { title: "О нас", href: "/" },
    { title: "События", href: "/" },
    { title: "Новости", href: "/" },
    { title: "Контакты", href: "/" },
    { title: "Условия", href: "/" },
  ];
  const { open } = useSelector(selectData);
  return (
    <Slide
      direction="right"
      in={open}
      timeout={MENU_TRANSITION_DURATION}
      mountOnEnter
      unmountOnExit
    >
      <div
        css={`
          position: fixed;
          width: 100%;
          z-index: 6;
        `}
      >
        <Layout
          menu
          title="menu"
          justify="flex-end"
          redBreakpoints={RED_BREAKPOINTS}
          css={`
            height: 100%;
          `}
        >
          <RedGrid redBreakpoints={RED_BREAKPOINTS} item lg={4} md={6}>
            <Grid
              container
              spacingBreakpoints={{ lg: { t: 6, l: 6 }, xs: { t: 3, l: 3 } }}
              direction="column"
              css={`
                @media (max-height: 500px) {
                  flex-direction: row;
                }
              `}
            >
              {menu.map(({ title, href }, index) => (
                <Grid item key={index}>
                  <MenuLink color="inherit" underline="none" to={href}>
                    {title}
                  </MenuLink>
                </Grid>
              ))}
            </Grid>
          </RedGrid>
        </Layout>
      </div>
    </Slide>
  );
};

export default Menu;
