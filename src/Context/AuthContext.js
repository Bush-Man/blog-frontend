import React,{  createContext, useReducer} from "react";

import AuthReducer from "./Reducers/AuthReducer.js";
const initialState = {
  user: null || JSON.parse(localStorage.getItem("user")),
  isLoading: false,
  error:false
}

export const AuthContext = createContext(initialState);

//remember children should start with a small letter if you use capital letter it will render a blank page.
//The context provider function should start with a capital letter if you use a small letter it shows errors.
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  
  return (
    <AuthContext.Provider value={{
      user: state.user,
      isLoading: state.isLoading,
      error: state.error,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  );
};

