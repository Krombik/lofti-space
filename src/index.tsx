import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/common/App";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "font.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
