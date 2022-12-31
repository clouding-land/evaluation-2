import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  console.log(children);

  const [auth, setAuth] = useState({
    token: null,
  });

  const loginUser=(token)=>{
    setAuth({
      ...auth,
      token,
    });
  };
  const logoutUser=()=>{
    setAuth({
      ...auth,
      token:null,
    });
  };


  // const handleChange = () => {
  //   console.log("Inside Context API");
  // };
  return (
    <AuthContext.Provider value={{loginUser,logoutUser,auth}}>
      {children}
    </AuthContext.Provider>
  );
};
