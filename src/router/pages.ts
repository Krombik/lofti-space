import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import Space from "pages/Space";
import Tariffs from "pages/Tariffs";
import Events from "pages/Events";

const pages = [
  { path: "/", Component: Home },
  { path: "/aboutus", Component: AboutUs },
  { path: "/space", Component: Space },
  { path: "/tariffs", Component: Tariffs },
  { path: "/events", Component: Events },
];

export default pages;
