import axios from "axios";


//const API = axios.create({ baseUrl: "" });
export const login = async (data,dispatch) => {
    dispatch({ type: "AUTH_START" });
    try {
        ///Forgetting this part sometimes
        const res = await axios.post("https://blogwebsiteapitry.onrender.com/auth/login/", data);
        dispatch({
            type: "AUTH_SUCCESS",
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: "AUTH_FAIL",
            payload:error
        }) 
        
    }
}
