import * as actionTypes from "./userActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isLoaded: false,
  convertType: { open: false },
};

export const userRaducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONVERT_TYPE_INIT:
      return {
        ...state,
        convertType: action.payload.data,
      };
    default:
      return state;
  }
};
