import { Appraducer } from "./appRaducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";


const store = configureStore(
    {reducer: Appraducer},
    composeWithDevTools(applyMiddleware(thunk))
  );

export default store;