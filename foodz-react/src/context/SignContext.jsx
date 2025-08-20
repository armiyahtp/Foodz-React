import { createContext, useContext, useState } from "react";

const SignContext = createContext();


export const SignProvider = ({ children }) => {

  const [login, setLogin] = useState('hidden');
  const [register, setRegister] = useState('hidden')

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

  return (
    <SignContext.Provider value={{ register, showRegister, hideRegister, login, showLogin, hideLogin }}>
      {children}
    </SignContext.Provider>
  );
};

export const useSign = () => useContext(SignContext);
