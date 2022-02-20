import React, { useState, createContext } from "react";

export const VerificationContext = createContext();

export const VerificationProvider = (props) => {
  const [verified, setVerified] = useState(false);
  return (
    <VerificationContext.Provider value={[verified, setVerified]}>
      {props.children}
    </VerificationContext.Provider>
  );
};
