import { createContext, useContext, useEffect, useState } from "react";

const SignContext = createContext();


export const SignProvider = ({ children }) => {

  const [login, setLogin] = useState('hidden');
  const [register, setRegister] = useState('hidden')
  const [isAuthenticated, setAuthenticated] = useState(false)

  const showRegister = () => {
    setRegister('block');
    setLogin('hidden');
  }

  const hideRegister = () => {
    setRegister('hidden');
  }

  const showLogin = () => {
    setLogin('block');
    setRegister('hidden');
  }

  const hideLogin = () => {
    setLogin('hidden');
  }


  useEffect(()=>{
    const token = localStorage.getItem("BearToken")
    if(token){
      setAuthenticated(true)
    }else{
      setAuthenticated(false)
    }
  },[])


  const isAuth = (token) =>{
    localStorage.setItem("BearToken",token)
    setAuthenticated(true)
    setLogin("hidden")
    setRegister("hidden")
  }


  const logout = () => {
    localStorage.removeItem("BearToken")
    setLogin("block")
    setAuthenticated(false)
  }

  return (
    <SignContext.Provider value={{ register, showRegister, hideRegister, login, showLogin, hideLogin, isAuthenticated, isAuth, logout}}>
      {children}
    </SignContext.Provider>
  );
};

export const useSign = () => useContext(SignContext);
