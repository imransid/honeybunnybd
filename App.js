import React from "react";
import Routes from "./src/route/RootNavigator";
import store from "./src/store/Store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
