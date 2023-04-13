import * as  actionTypes  from "./userActionTypes";

export const setConvertType = (data) => {
    console.warn("data:--", data)
    return (dispatch) => {
      dispatch(setConvertTypeInit(data));
    };
  };
  
  export const setConvertTypeInit = (data) => ({
    type: actionTypes.SET_CONVERT_TYPE_INIT,
    payload: { data },
  });
  