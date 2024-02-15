import React, { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext();

const LoginProvider = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const values = {
    user,
    setUser,
  };

  return (
    <LoginContext.Provider value={values}>
      {props.children}
    </LoginContext.Provider>
  );

};
export const useLoginContextCall = ()=>{
    return useContext(LoginContext)
}

export default LoginProvider;
