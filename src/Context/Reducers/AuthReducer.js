const AuthReducer = (state, action) => {
    switch (action.type) {
        case "AUTH_START":
            return {
                ...state, user: null, isLoading: true, error: false
            }
        case "AUTH_SUCCESS":
            localStorage.setItem("user",JSON.stringify({...action?.payload}));
            return {
                ...state,user: action.payload,isLoading:false,error:false
            }
        case "AUTH_FAIL":
            return {
                ...state,user:null,isLoading:false,error:true
            }
        case "LOG_OUT":
            localStorage.clear();
            return {
                ...state, user: null, isLoading: false, error: false
            }
        default:
            return { state };
    }
}
export default AuthReducer