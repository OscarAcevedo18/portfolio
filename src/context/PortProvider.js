import React, { createContext, useState } from "react";

export const myContext = createContext();

const PortProvider = ({ children }) => {
  const [cv, setCv] = useState([]);
  const [info, setInfo] = useState([]);

  return (
    <myContext.Provider
      value={{
        cv,
        setCv,
        info,
        setInfo,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
export default PortProvider;
