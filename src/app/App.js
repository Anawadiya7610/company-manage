import React from "react";
import "./../index.css";
import Login from "../views/login/login.component";
import { Provider } from "react-redux";
import store from "./store";
import { HashRouter } from "react-router-dom";
import { AppRootContainerPage } from "../shared/approot.container";
function App() {
  return (
   <Provider store={store}>
   
   <HashRouter>
   <AppRootContainerPage />
 </HashRouter>
   </Provider>
  );
}

export default App;
