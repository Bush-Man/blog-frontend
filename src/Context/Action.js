//auth actions
export const loginStart = (dispatch) => dispatch({
  type:"AUTH_START" 
});

export const loginSuccess = (dispatch,data) => dispatch({    
        type: "AUTH_SUCCESS",
        payload: data 
});
export const loginFail = (dispatch) => dispatch({  
        type:"AUTH_FAIL",  
});

export const logOut = (dispatch) => {  
        dispatch({
                type:"LOG_OUT"
        }); 
}


